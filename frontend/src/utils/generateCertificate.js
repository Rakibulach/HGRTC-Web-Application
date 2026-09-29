// Canvas diye ekta certificate "আঁকা" hoy, tarpor সেটা PNG file hisebe download hoy — kono backend/PDF library lagbe na
export async function downloadCertificate({ studentName, courseTitle, date }) {
  await document.fonts.ready; // page-er custom font (Newsreader/IBM Plex Sans) load hoya nishchit kori

  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 850;
  const ctx = canvas.getContext('2d');
  ctx.textAlign = 'center';

  ctx.fillStyle = '#F6F8F7';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = '#0E2A47';
  ctx.lineWidth = 10;
  ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);

  ctx.strokeStyle = '#12897F';
  ctx.lineWidth = 2;
  ctx.strokeRect(55, 55, canvas.width - 110, canvas.height - 110);

  ctx.fillStyle = '#0E2A47';
  ctx.font = '600 26px "IBM Plex Sans"';
  ctx.fillText('HUMAN GENETICS RESEARCH & TRAINING CENTER LTD.', canvas.width / 2, 150);

  ctx.font = 'italic 500 48px "Newsreader"';
  ctx.fillText('Certificate of Completion', canvas.width / 2, 240);

  ctx.fillStyle = '#5B7184';
  ctx.font = '400 20px "IBM Plex Sans"';
  ctx.fillText('This is to certify that', canvas.width / 2, 330);

  ctx.fillStyle = '#12897F';
  ctx.font = '600 44px "Newsreader"';
  ctx.fillText(studentName, canvas.width / 2, 400);

  ctx.fillStyle = '#5B7184';
  ctx.font = '400 20px "IBM Plex Sans"';
  ctx.fillText('has successfully completed the training course', canvas.width / 2, 450);

  ctx.fillStyle = '#0E2A47';
  ctx.font = '600 30px "IBM Plex Sans"';
  ctx.fillText(courseTitle, canvas.width / 2, 500);

  ctx.fillStyle = '#5B7184';
  ctx.font = '400 16px "IBM Plex Mono"';
  ctx.fillText(`Issued on ${date}`, canvas.width / 2, 570);

  ctx.strokeStyle = '#DCE6E2';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2 - 140, 690);
  ctx.lineTo(canvas.width / 2 + 140, 690);
  ctx.stroke();
  ctx.font = '400 14px "IBM Plex Sans"';
  ctx.fillText('Authorized Signature', canvas.width / 2, 715);

  canvas.toBlob((blob) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `HGRTC-Certificate-${courseTitle.replace(/\s+/g, '-')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  });
}