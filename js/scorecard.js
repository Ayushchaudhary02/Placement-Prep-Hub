function downloadScorecard() {
  // Get session data
  const sessionData = JSON.parse(sessionStorage.getItem('preppath_current_session') || '{}');
  
  if (!sessionData.score !== undefined) {
    alert('No session data found. Please complete a mock interview first.');
    return;
  }

  if (typeof jsPDF === 'undefined' || !window.jspdf) {
    alert('PDF library not loaded. Please refresh the page and try again.');
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });

  // Layout constants
  const lm = 20, rm = 20, tm = 20;
  const pw = 210 - lm - rm;
  let y = tm;

  // Helper function to add text
  function addText(text, opts = {}) {
    const {
      size = 10, bold = false, center = false,
      color = [30, 30, 30], indent = 0, lineHeight = 0.45
    } = opts;
    doc.setFontSize(size);
    doc.setFont('helvetica', bold ? 'bold' : 'normal');
    doc.setTextColor(...color);
    const x = center ? 105 : lm + indent;
    const align = center ? 'center' : 'left';
    const lines = doc.splitTextToSize(String(text), pw - indent);
    lines.forEach(line => {
      if (y > 270) { doc.addPage(); y = tm; }
      doc.text(line, x, y, { align });
      y += size * lineHeight;
    });
    y += 1.5;
  }

  // Helper function to add divider
  function addDivider(color = [200, 200, 200], thickness = 0.3) {
    doc.setDrawColor(...color);
    doc.setLineWidth(thickness);
    doc.line(lm, y, lm + pw, y);
    y += 5;
  }

  // Helper function to add box
  function addBox(x, boxy, w, h, fillColor, strokeColor) {
    doc.setFillColor(...fillColor);
    doc.setDrawColor(...strokeColor);
    doc.setLineWidth(0.3);
    doc.roundedRect(x, boxy, w, h, 3, 3, 'FD');
  }

  // ── HEADER ──
  doc.setFillColor(108, 99, 255);
  doc.rect(0, 0, 210, 40, 'F');

  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(255, 255, 255);
  doc.text('PrepPath', 20, 18);

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(220, 216, 255);
  doc.text('Mock Interview Scorecard', 20, 27);

  doc.setFontSize(9);
  doc.setTextColor(200, 196, 255);
  doc.text('Generated on ' + new Date().toLocaleDateString('en-IN', {
    day: 'numeric', month: 'long', year: 'numeric'
  }), 20, 34);

  y = 52;

  // ── SESSION INFO ──
  addText('Session Details', { size: 13, bold: true, color: [30, 30, 30] });
  addDivider([108, 99, 255], 0.5);

  const company = sessionData.company || 'General';
  const date = sessionData.date || new Date().toLocaleDateString();
  const attempted = sessionData.questionsAttempted || 0;
  const hints = sessionData.hintsUsed || 0;
  const time = sessionData.timeTaken || 0;
  const rawScore = sessionData.score || 0;
  const scorePercent = Math.round(rawScore);

  const details = [
    ['Company Simulated', company],
    ['Session Date', date],
    ['Questions Attempted', String(attempted)],
    ['Hints Used', String(hints)],
    ['Time Taken', time > 0 ? Math.round(time / 60000) + ' minutes' : 'N/A'],
    ['Difficulty', sessionData.difficulty || 'Mixed']
  ];

  details.forEach(([label, value]) => {
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(80, 80, 80);
    doc.text(label + ':', lm, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(30, 30, 30);
    doc.text(value, lm + 60, y);
    y += 7;
  });

  y += 5;

  // ── SCORE CARD ──
  addText('Performance Score', { size: 13, bold: true, color: [30, 30, 30] });
  addDivider([108, 99, 255], 0.5);

  const scoreColor = scorePercent >= 80 
    ? [22, 163, 74] 
    : scorePercent >= 50 
    ? [234, 88, 12] 
    : [220, 38, 38];

  addBox(lm, y, pw, 28, [248, 247, 255], [108, 99, 255]);

  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...scoreColor);
  doc.text(scorePercent + '%', 105, y + 16, { align: 'center' });

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 100, 100);
  doc.text('Overall Self-Rating Score', 105, y + 23, { align: 'center' });

  y += 35;

  // Score breakdown bar
  const barW = pw;
  const barH = 8;
  doc.setFillColor(230, 230, 230);
  doc.roundedRect(lm, y, barW, barH, 2, 2, 'F');
  const fillW = (scorePercent / 100) * barW;
  doc.setFillColor(...scoreColor);
  doc.roundedRect(lm, y, fillW, barH, 2, 2, 'F');
  y += 16;

  // Rating label
  let ratingLabel = 'Needs Improvement';
  let ratingColor = [220, 38, 38];
  if (scorePercent >= 80) { 
    ratingLabel = 'Excellent — Interview Ready!'; 
    ratingColor = [22, 163, 74]; 
  } else if (scorePercent >= 60) { 
    ratingLabel = 'Good — Keep Practicing'; 
    ratingColor = [234, 88, 12]; 
  } else if (scorePercent >= 40) { 
    ratingLabel = 'Average — Focus on Weak Topics'; 
    ratingColor = [234, 88, 12]; 
  }

  addText(ratingLabel, { 
    size: 11, bold: true, center: true, color: ratingColor 
  });

  y += 5;

  // ── QUESTION BREAKDOWN ──
  const questions = sessionData.questions || [];

  if (questions.length > 0) {
    addText('Question Breakdown', { size: 13, bold: true, color: [30, 30, 30] });
    addDivider([108, 99, 255], 0.5);

    questions.forEach((q, i) => {
      if (y > 250) { doc.addPage(); y = tm; }

      addBox(lm, y, pw, 22, [250, 250, 255], [220, 216, 255]);

      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(60, 60, 60);
      const qTitle = 'Q' + (i + 1) + ': ' + (q.title || 'Question ' + (i + 1));
      const qLines = doc.splitTextToSize(qTitle, pw - 40);
      doc.text(qLines[0], lm + 4, y + 8);

      const ratingColors = {
        'Perfect': [22, 163, 74],
        'Got It': [59, 130, 246],
        'Partial': [234, 88, 12],
        'Vague': [239, 68, 68],
        'Blank': [156, 163, 175]
      };
      const rating = q.rating || 'N/A';
      const rc = ratingColors[rating] || [100, 100, 100];
      doc.setTextColor(...rc);
      doc.setFont('helvetica', 'bold');
      doc.text(String(rating), lm + pw - 4, y + 8, { align: 'right' });

      doc.setFontSize(8);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(120, 120, 120);
      const meta = (q.topic || '') + 
        (q.difficulty ? ' · ' + q.difficulty : '') + 
        (q.company ? ' · ' + q.company : '');
      doc.text(meta, lm + 4, y + 15);

      y += 28;
    });
  }

  y += 5;

  // ── TIPS SECTION ──
  if (y > 220) { doc.addPage(); y = tm; }

  addText('Personalised Tips', { size: 13, bold: true, color: [30, 30, 30] });
  addDivider([108, 99, 255], 0.5);

  const tips = [];
  if (scorePercent < 40) {
    tips.push('Focus on Easy questions first — build confidence before moving to Medium.');
    tips.push('Use the Flashcard mode on PrepPath daily for 15 minutes.');
    tips.push('Solve at least 2 Easy LeetCode problems every day this week.');
  } else if (scorePercent < 70) {
    tips.push('Start attempting Medium difficulty questions consistently.');
    tips.push('Review hints you used — understand the pattern, not just the answer.');
    tips.push('Practice explaining your approach out loud before writing code.');
  } else {
    tips.push('You are performing well — now focus on speed and consistency.');
    tips.push('Attempt Hard questions and weekly LeetCode contests.');
    tips.push('Do mock sessions with Google and Amazon difficulty settings.');
  }
  tips.push('Practice ' + (hints > 2 ? 'reducing hint usage' : 
    'maintaining low hint usage') + ' in your next session.');
  tips.push('Review all HR questions in PrepPath before your actual interview.');

  tips.forEach(tip => {
    addText('• ' + tip, { size: 10, indent: 4, color: [60, 60, 60] });
  });

  // ── FOOTER ──
  const totalPages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(180, 180, 180);
    doc.text('PrepPath · From Zero to Placed · preppath.github.io', 
      105, 287, { align: 'center' });
    doc.text('Page ' + i + ' of ' + totalPages, 
      190, 287, { align: 'right' });
  }

  const fileName = 'PrepPath_Scorecard_' + 
    company.replace(/\s+/g, '_') + '_' + 
    new Date().toLocaleDateString('en-IN').replace(/\//g, '-') + '.pdf';
  doc.save(fileName);
}

// Export for use in other modules
window.downloadScorecard = downloadScorecard;
