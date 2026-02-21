export function textTemplate(
  transactionId: string,
  amount: string,
  paymentDate: string,
  name?: string,
) {
  return `${!!name ? `Hello ${name},` : "Hello,"}

We've successfully received your payment for our GRE Universe Course.

Program Enrolled: GRE Universe Course
Transaction ID: ${transactionId}
Payment Amount: ₹${amount}
Payment Date: ${paymentDate}

You now have access to:

 - 60+ hours of recorded classes
 - 1000+ practice questions
 - Adaptive full-length mock tests
 - Customized study plans

You can log in to your dashboard to start your preparation immediately.

If you have any questions regarding your enrollment or need assistance, feel free to reply to this email.

Wishing you a high GRE score,
Team Punit Mishra Prep`;
}

export function htmlTemplate(
  transactionId: string,
  amount: string,
  paymentDate: string,
  name?: string,
) {
  return `<!doctype html>
<html lang=en>
<head>
<meta charset=UTF-8>
<meta name=viewport content="width=device-width,initial-scale=1">
<title>Payment Confirmation</title>
<style>a,body,table,td{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table,td{mso-table-lspace:0pt;mso-table-rspace:0pt}img{-ms-interpolation-mode:bicubic;border:0;height:auto;line-height:100%;outline:0;text-decoration:none}table{border-collapse:collapse!important}body{height:100%!important;margin:0!important;padding:0!important;width:100%!important}</style>
</head>
<body style=margin:0;padding:0>
<table border=0 cellpadding=0 cellspacing=0 width=100%>
<tr>
<td align=center style="padding:40px 10px">
<table border=0 cellpadding=0 cellspacing=0 width=100% style="max-width:600px;border:1px solid #333;border-radius:5px;overflow:hidden">
<tr>
<td align=center style="padding:40px 20px;background-color:#081329">
<img src=https://www.punitmishraprep.com/icons/logo-cropped.png alt="Punit Mishra Prep" width=200 style=display:block;font-family:Helvetica,Arial,sans-serif;color:#fff;font-size:20px>
</td>
</tr>
<tr>
<td align=left style="padding:40px 40px 20px 40px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.6">
<p style="margin:0 0 20px 0">
${!!name ? `Hello ${name},` : "Hello,"}
</p>
<p style="margin:0 0 20px 0">
We've successfully received your payment for our GRE Universe Course.
</p>
<p style="margin:0 0 10px 0">
<strong>Program Enrolled:</strong> GRE Universe Course
</p>
<p style="margin:0 0 10px 0">
<strong>Transaction ID:</strong> ${transactionId}
</p>
<p style="margin:0 0 10px 0">
<strong>Payment Amount:</strong> ₹${amount}
</p>
<p style="margin:0 0 20px 0">
<strong>Payment Date:</strong> ${paymentDate}
</p>
<p style="margin:0 0 20px 0">
You now have access to:
</p>
<ul style="margin:0 0 20px 20px;padding:0">
<li>60+ hours of recorded classes</li>
<li>1000+ practice questions</li>
<li>Adaptive full-length mock tests</li>
<li>Customized study plans</li>
</ul>
<p style="margin:0 0 20px 0">
You can log in to your dashboard to start your preparation immediately.
</p>
<p style="margin:0 0 40px 0">
If you have any questions regarding your enrollment or need assistance, feel free to reply to this email.
</p>
<p style=margin:0>
Wishing you a high GRE score,<br>
<strong>Team Punit Mishra Prep</strong>
</p>
</td>
</tr>
<tr>
<td style=background-color:#081329;height:15px;font-size:0;line-height:0>
&nbsp;
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>`;
}

const paymentConfirmationTemplate = {
  text: textTemplate,
  html: htmlTemplate,
};

export default paymentConfirmationTemplate;
