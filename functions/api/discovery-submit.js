export async function onRequestPost(context) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };
  try {
    const payload = await context.request.json();
    const lines = [
      '═══ סיכום ═══',
      `שם:               ${payload.name || ''}`,
      `חברה:             ${payload.company || ''}`,
      `תפקיד:            ${payload.role || ''}`,
      `שנים ב-CRM:       ${payload.yearsInCRM || ''}`,
      `כובע:             ${payload.hat || ''}`,
      '', 'תחומי שחיקה:',
      ...((payload.timeDrains || []).length ? payload.timeDrains.map(d => `  • ${d}`) : ['  (לא סומן)']),
      '', 'המשאלה:', `  ${payload.wish || '(ריק)'}`,
      '', `מה הכי יציל את היום: ${payload.dayMaker || ''}`,
      '', 'סוכנים שנבחרו:',
      ...((payload.agentsSelected || []).length ? payload.agentsSelected.map(a => `  • ${a}`) : ['  (לא נבחר)']),
      '', `מודל יישום מועדף: ${payload.implementationPreference || ''}`,
      '', '═══ JSON ═══', JSON.stringify(payload, null, 2),
    ];
    const html = `<div dir="rtl" style="font-family: Arial, sans-serif; white-space: pre-wrap; line-height: 1.6; font-size: 14px;">${lines.join('\n').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>`;
    const subject = `טופס סוכני AI · ${payload.name || 'ללא שם'}${payload.company ? ' · ' + payload.company : ''}`;
    const resp = await fetch('https://notify.hai.tech/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ to: 'info@hai.tech', subject, html, from: 'Inna Grois <inna@hai.tech>' }),
    });
    if (!resp.ok) return new Response(JSON.stringify({ ok: false, error: await resp.text() }), { status: 500, headers });
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: err.message || 'Service error' }), { status: 500, headers });
  }
}
export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' } });
}
