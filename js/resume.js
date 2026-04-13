const ResumeGenerator = {

  load(key, def) {
    const v = localStorage.getItem('preppath_' + key);
    return v !== null ? JSON.parse(v) : def;
  },

  getStats() {
    const solved = this.load('dsa_solved', []);
    const sessions = this.load('mock_sessions', []);
    const hrCount = this.load('hr_practiced', 0);
    const streak = this.load('streak_dates', []).length;
    return {
      dsaSolved: solved.length,
      mockSessions: sessions.length,
      hrPracticed: hrCount,
      totalDays: streak
    };
  },

  getInputs() {
    return {
      name: document.getElementById('rv-name')?.value || '',
      email: document.getElementById('rv-email')?.value || '',
      phone: document.getElementById('rv-phone')?.value || '',
      college: document.getElementById('rv-college')?.value || '',
      degree: document.getElementById('rv-degree')?.value || 'B.Tech Computer Science',
      year: document.getElementById('rv-year')?.value || '2026',
      track: document.getElementById('rv-track')?.value || 'Full-Stack Web Development',
      github: document.getElementById('rv-github')?.value || '',
      linkedin: document.getElementById('rv-linkedin')?.value || '',
      leetcode: document.getElementById('rv-leetcode')?.value || ''
    };
  },

  getSkillsByTrack(track) {
    const map = {
      'Full-Stack Web Development': 
        'HTML, CSS, JavaScript, React.js, Node.js, Express.js, MySQL, REST APIs, Git, GitHub',
      'Data / ML Engineering': 
        'Python, Pandas, NumPy, scikit-learn, SQL, Matplotlib, Jupyter, Git, GitHub',
      'Cloud + DevOps': 
        'Linux, AWS, Docker, CI/CD, GitHub Actions, Bash, YAML, Nginx, Git',
      'Android / Mobile Development': 
        'Java, Kotlin, Android Studio, XML Layouts, REST APIs, Firebase, Git, GitHub'
    };
    return map[track] || 'HTML, CSS, JavaScript, Python, SQL, Git, GitHub';
  },

  buildHTML(inputs, stats) {
    const skills = this.getSkillsByTrack(inputs.track);
    const links = [];
    if (inputs.github) links.push('GitHub: ' + inputs.github);
    if (inputs.linkedin) links.push('LinkedIn: ' + inputs.linkedin);
    if (inputs.leetcode) links.push('LeetCode: ' + inputs.leetcode);

    return `
    <div style="font-family: 'Times New Roman', serif; font-size: 12px; 
      line-height: 1.6; color: #1a1a2e;">

      <div style="text-align: center; border-bottom: 2px solid #1a1a2e; 
        padding-bottom: 10px; margin-bottom: 12px;">
        <div style="font-size: 22px; font-weight: 700; letter-spacing: 1px;">
          ${inputs.name || 'YOUR NAME'}
        </div>
        <div style="font-size: 11px; color: #444; margin-top: 4px;">
          ${inputs.email || 'email@example.com'} 
          ${inputs.phone ? ' | ' + inputs.phone : ''}
        </div>
        ${links.length ? `<div style="font-size: 10px; color: #555; margin-top: 3px;">
          ${links.join(' | ')}
        </div>` : ''}
      </div>

      <div style="margin-bottom: 12px;">
        <div style="font-size: 13px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 1px; border-bottom: 1px solid #333; 
          padding-bottom: 3px; margin-bottom: 8px;">Education</div>
        <div style="display: flex; justify-content: space-between;">
          <div>
            <div style="font-weight: 600;">
              ${inputs.college || 'Your College Name'}
            </div>
            <div style="color: #444;">${inputs.degree}</div>
          </div>
          <div style="text-align: right; color: #555; font-size: 11px;">
            Expected ${inputs.year}
          </div>
        </div>
      </div>

      <div style="margin-bottom: 12px;">
        <div style="font-size: 13px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 1px; border-bottom: 1px solid #333; 
          padding-bottom: 3px; margin-bottom: 8px;">Technical Skills</div>
        <div><span style="font-weight: 600;">Track:</span> 
          ${inputs.track}</div>
        <div><span style="font-weight: 600;">Technologies:</span> 
          ${skills}</div>
        <div><span style="font-weight: 600;">DSA:</span> 
          ${stats.dsaSolved} problems solved on LeetCode 
          (Arrays, Strings, Trees, Graphs, DP)</div>
      </div>

      <div style="margin-bottom: 12px;">
        <div style="font-size: 13px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 1px; border-bottom: 1px solid #333; 
          padding-bottom: 3px; margin-bottom: 8px;">Projects</div>

        <div style="margin-bottom: 10px;">
          <div style="display: flex; justify-content: space-between;">
            <span style="font-weight: 600;">PrepPath — Placement Preparation Platform</span>
            <span style="font-size: 11px; color: #555;">Live on GitHub Pages</span>
          </div>
          <div style="color: #333; margin-top: 3px;">
            • Built a full-stack placement prep platform with 250 DSA questions, 
            company-wise mock interview simulator, HR round practice, 
            flashcard mode, and a 6-month roadmap
          </div>
          <div style="color: #333;">
            • Implemented progress tracking, daily streak system, 
            activity dashboard with Chart.js, and PDF resume generator
          </div>
          <div style="color: #333;">
            • Tech: HTML, CSS, JavaScript, Chart.js, jsPDF, localStorage API
          </div>
        </div>

        <div>
          <div style="font-weight: 600;">
            [Your Project 2 — Add in GitHub]
          </div>
          <div style="color: #666; font-style: italic; margin-top: 3px;">
            Add your second project here
          </div>
        </div>
      </div>

      <div style="margin-bottom: 12px;">
        <div style="font-size: 13px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 1px; border-bottom: 1px solid #333; 
          padding-bottom: 3px; margin-bottom: 8px;">
          Interview Preparation
        </div>
        <div>• Solved ${stats.dsaSolved} DSA problems across 10 topics 
          including Arrays, Strings, Trees, Graphs, and Dynamic Programming</div>
        <div>• Completed ${stats.mockSessions} timed mock interview sessions 
          simulating TCS, Infosys, Amazon, and Google formats</div>
        <div>• Practiced ${stats.hrPracticed} HR interview questions 
          covering situational, behavioral, and career goal topics</div>
        <div>• Maintained ${stats.totalDays}-day consistent practice 
          streak on PrepPath platform</div>
      </div>

      <div>
        <div style="font-size: 13px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 1px; border-bottom: 1px solid #333; 
          padding-bottom: 3px; margin-bottom: 8px;">Achievements & Profiles</div>
        ${inputs.leetcode ? 
          `<div>• LeetCode: ${inputs.leetcode} — 
            ${stats.dsaSolved} problems solved</div>` : ''}
        ${inputs.github ? 
          `<div>• GitHub: ${inputs.github} — 
            Active contributor with daily commits</div>` : ''}
        ${inputs.linkedin ? 
          `<div>• LinkedIn: ${inputs.linkedin}</div>` : ''}
        <div>• Built and deployed PrepPath platform — 
          live at GitHub Pages</div>
      </div>

    </div>`;
  },

  preview() {
    const inputs = this.getInputs();
    const stats = this.getStats();
    const preview = document.getElementById('resume-preview');
    if (preview) {
      preview.innerHTML = this.buildHTML(inputs, stats);
    }
  },

  download() {
    const inputs = this.getInputs();
    if (!inputs.name || !inputs.email || !inputs.college) {
      alert('Please fill in Name, Email, and College before downloading.');
      return;
    }

    const stats = this.getStats();
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: 'mm', format: 'a4' });

    const lm = 20, rm = 20, tm = 20;
    const pw = 210 - lm - rm;
    let y = tm;

    const addLine = (text, opts = {}) => {
      const { 
        size = 10, bold = false, center = false, 
        color = [0,0,0], indent = 0 
      } = opts;
      doc.setFontSize(size);
      doc.setFont('times', bold ? 'bold' : 'normal');
      doc.setTextColor(...color);
      const x = center ? 105 : lm + indent;
      const align = center ? 'center' : 'left';
      const lines = doc.splitTextToSize(text, pw - indent);
      lines.forEach(line => {
        if (y > 270) { doc.addPage(); y = tm; }
        doc.text(line, x, y, { align });
        y += size * 0.45;
      });
      y += 1;
    };

    const addSection = (title) => {
      y += 3;
      doc.setDrawColor(0);
      doc.setLineWidth(0.4);
      addLine(title, { size: 11, bold: true });
      doc.line(lm, y - 1, lm + pw, y - 1);
      y += 3;
    };

    const skills = this.getSkillsByTrack(inputs.track);

    addLine(inputs.name.toUpperCase(), { size: 18, bold: true, center: true });
    const contactParts = [inputs.email];
    if (inputs.phone) contactParts.push(inputs.phone);
    addLine(contactParts.join(' | '), { size: 9, center: true, color: [80,80,80] });
    const linkParts = [];
    if (inputs.github) linkParts.push('GitHub: ' + inputs.github);
    if (inputs.linkedin) linkParts.push('LinkedIn: ' + inputs.linkedin);
    if (inputs.leetcode) linkParts.push('LeetCode: ' + inputs.leetcode);
    if (linkParts.length) {
      addLine(linkParts.join(' | '), { size: 9, center: true, color: [80,80,80] });
    }
    y += 2;
    doc.setDrawColor(0);
    doc.setLineWidth(0.6);
    doc.line(lm, y, lm + pw, y);
    y += 5;

    addSection('EDUCATION');
    addLine(inputs.college, { size: 10, bold: true });
    addLine(inputs.degree + ' — Expected ' + inputs.year, 
      { size: 10, color: [60,60,60] });

    addSection('TECHNICAL SKILLS');
    addLine('Track: ' + inputs.track, { size: 10 });
    addLine('Technologies: ' + skills, { size: 10 });
    addLine('DSA: ' + stats.dsaSolved + 
      ' problems solved (Arrays, Strings, Trees, Graphs, DP)', { size: 10 });

    addSection('PROJECTS');
    addLine('PrepPath — Placement Preparation Platform', 
      { size: 10, bold: true });
    addLine('Live on GitHub Pages', { size: 9, color: [80,80,80] });
    addLine('• Built a full placement prep platform with 250 DSA questions, ' +
      'mock interview simulator, HR practice, flashcard mode, and 6-month roadmap', 
      { size: 10, indent: 4 });
    addLine('• Implemented progress tracking, daily streak, Chart.js dashboard, ' +
      'and PDF resume generator', { size: 10, indent: 4 });
    addLine('• Tech: HTML, CSS, JavaScript, Chart.js, jsPDF, localStorage API', 
      { size: 10, indent: 4 });

    addSection('INTERVIEW PREPARATION');
    addLine('• Solved ' + stats.dsaSolved + 
      ' DSA problems across 10 topics on LeetCode', 
      { size: 10, indent: 4 });
    addLine('• Completed ' + stats.mockSessions + 
      ' timed mock sessions (TCS, Infosys, Amazon, Google formats)', 
      { size: 10, indent: 4 });
    addLine('• Practiced ' + stats.hrPracticed + 
      ' HR questions — situational, behavioral, career goals', 
      { size: 10, indent: 4 });
    addLine('• Maintained ' + stats.totalDays + 
      '-day consistent practice streak', 
      { size: 10, indent: 4 });

    addSection('ACHIEVEMENTS & PROFILES');
    if (inputs.leetcode) {
      addLine('• LeetCode (' + inputs.leetcode + '): ' + 
        stats.dsaSolved + ' problems solved', { size: 10, indent: 4 });
    }
    if (inputs.github) {
      addLine('• GitHub (' + inputs.github + '): Active daily commits', 
        { size: 10, indent: 4 });
    }
    addLine('• PrepPath platform built and deployed on GitHub Pages', 
      { size: 10, indent: 4 });

    doc.save((inputs.name || 'resume').replace(/\s+/g, '_') + '_resume.pdf');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const inputs = ['rv-name','rv-email','rv-phone','rv-college',
    'rv-degree','rv-year','rv-github','rv-linkedin','rv-leetcode'];
  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', () => ResumeGenerator.preview());
  });
  const trackEl = document.getElementById('rv-track');
  if (trackEl) trackEl.addEventListener('change', () => ResumeGenerator.preview());
});
