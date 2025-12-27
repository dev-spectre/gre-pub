export function textTemplate(
  token: string,
  tokenAgeInMinutes: number,
  name?: string,
) {
  const domain =
    process.env.NODE_ENV === "production"
      ? "https://punitmishraprep.com"
      : "http://localhost:3000";

  return `${!!name ? `Hello ${name}` : "Hello"},

We received a request to reset your password for your Punit Mishra Prep account.

Click the link below to create a new password:

${domain}/reset-password?token=${token}

This link is valid for the next ${tokenAgeInMinutes} minutes.

If you didn't ask to reset your password, you can safely ignore this email. Your account is secure.

All the best,
Team Punit Mishra Prep`;
}

export function htmlTemplate(
  token: string,
  tokenAgeInMinutes: number,
  logoCid: string,
  name?: string,
) {
  const domain =
    process.env.NODE_ENV === "production"
      ? "https://punitmishraprep.com"
      : "http://localhost:3000";

  return `<!doctype html>
<html lang=en>
<head>
<meta charset=UTF-8>
<meta name=viewport content="width=device-width,initial-scale=1">
<title>Reset your password</title>
<style>a,body,table,td{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table,td{mso-table-lspace:0pt;mso-table-rspace:0pt}img{-ms-interpolation-mode:bicubic;border:0;height:auto;line-height:100%;outline:0;text-decoration:none}table{border-collapse:collapse!important}body{height:100%!important;margin:0!important;padding:0!important;width:100%!important;}</style>
</head>
<body style=margin:0;padding:0;>
<table border=0 cellpadding=0 cellspacing=0 width=100%>
<tr>
<td align=center style="padding:40px 10px">
<table border=0 cellpadding=0 cellspacing=0 width=100% style="max-width:600px;border:1px solid #333;border-radius:5px;overflow:hidden">
<tr>
<td align=center style="padding:40px 20px;background-color:#081329">
<img src=cid:${logoCid} alt="Punit Mishra Prep" width=200 style=display:block;font-family:Helvetica,Arial,sans-serif;color:#fff;font-size:20px>
</td>
</tr>
<tr>
<td align=left style="padding:40px 40px 20px 40px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.6">
<p style="margin:0 0 20px 0">${!!name ? `Hello ${name}` : "Hello"},</p>
<p style="margin:0 0 20px 0">We received a request to reset your password for your Punit Mishra Prep account.</p>
<p style="margin:0 0 30px 0">Click the link below to reset your password:</p>
<table border=0 cellspacing=0 cellpadding=0>
<tr>
<td align=center>
<a href="${domain}/reset-password?token=${token}" target=_blank style=font-size:16px;font-family:Helvetica,Arial,sans-serif;display:inline-block;font-weight:700>
Reset Password
</a>
</td>
</tr>
</table>
<p style="margin:30px 0 20px 0">
This link is valid for the next ${tokenAgeInMinutes} minutes. If you didn't ask for this, you can safely ignore this email.
</p>
<p style=margin:0>
All the best,<br>
Team Punit Mishra Prep
</p>
</td>
</tr>
<tr>
<td style=background-color:#081329;height:15px;font-size:0;line-height:0>&nbsp;</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>`;
}

const passwordResetTemplate = {
  text: textTemplate,
  html: htmlTemplate,
};

export default passwordResetTemplate;
