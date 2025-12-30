export function textTemplate(
  name: string,
  otp: string,
  otpAgeInMinutes: number,
) {
  return `${!!name ? `Hello ${name}` : "Hello"},

Thank you for registering with Punit Mishra Prep.

Here is your One-Time Password (OTP) to complete your sign-up:

OTP: ${otp}

This OTP is valid for the next ${otpAgeInMinutes} minutes. Do not share this code with anyone.

If you did not initiate this registration, please ignore this email.

All the best, Team Punit Mishra Prep`;
}

export function htmlTemplate(
  name: string,
  otp: string,
  otpAgeInMinutes: number,
) {
  return `<!doctype html>
<html lang=en>
<head>
<meta charset=UTF-8>
<meta name=viewport content="width=device-width,initial-scale=1">
<title>Verify your registration</title>
<style>a,body,table,td{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table,td{mso-table-lspace:0pt;mso-table-rspace:0pt}img{-ms-interpolation-mode:bicubic;border:0;height:auto;line-height:100%;outline:0;text-decoration:none}table{border-collapse:collapse!important}body{height:100%!important;margin:0!important;padding:0!important;width:100%!important}</style>
</head>
<body style=margin:0;padding:0>
<table border=0 cellpadding=0 cellspacing=0 width=100%>
<tr>
<td align=center style="padding:40px 10px">
<table border=0 cellpadding=0 cellspacing=0 width=100% style="max-width:600px;border:1px solid #333;border-radius:5px;overflow:hidden">
<tr>
<td align=center style="padding:40px 20px;background-color:#081329">
<img src="https://www.punitmishraprep.com/icons/logo-cropped.png" alt="Punit Mishra Prep" width=200 style=display:block;font-family:Helvetica,Arial,sans-serif;color:#fff;font-size:20px>
</td>
</tr>
<tr>
<td align=left style="padding:40px 40px 20px 40px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.6">
<p style="margin:0 0 20px 0">${!!name ? `Hello ${name}` : "Hello"},</p>
<p style="margin:0 0 20px 0">Thank you for registering with Punit Mishra Prep.</p>
<p style="margin:0 0 10px 0">Here is your One-Time Password (OTP) to complete your sign-up:</p>
<p style="margin:0 0 20px 0;font-size:18px">
<strong>OTP: ${otp}</strong>
</p>
<p style="margin:0 0 20px 0">
This OTP is valid for the next ${otpAgeInMinutes} minutes. Do not share this code with anyone.
</p>
<p style="margin:0 0 40px 0">
If you did not initiate this registration, please ignore this email.
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

const otpTemplate = {
  text: textTemplate,
  html: htmlTemplate,
};

export default otpTemplate;
