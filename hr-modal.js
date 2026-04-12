const hrData = {
  service: [
    {
      q: "Tell me about yourself",
      tag: "TCS / Infosys / Wipro",
      answer: "Say: Name → Degree + College → 1 strong skill → 1 project → why this company. Keep under 90 seconds. Never say 'I am fun-loving.' Example: 'I am Ayush, final year CS student at XYZ college. I specialize in full-stack web development and recently built a placement prep platform using HTML, CSS and JavaScript. I want to join TCS because of its strong fresher training program and global exposure.'"
    },
    {
      q: "Are you okay with relocation, night shifts, and bond?",
      tag: "TCS / Infosys / Wipro",
      answer: "ALWAYS say YES immediately. Say exactly: 'Yes, I am completely flexible and open to any location, shift, or bond requirement.' Any hesitation here = instant rejection in service companies. They are testing your flexibility, not your preference."
    },
    {
      q: "Why TCS / Infosys / Wipro?",
      tag: "TCS / Infosys / Wipro",
      answer: "Research ONE real fact before going in. For TCS say: 'TCS operates in 46 countries and has excellent fresher training through TCS iON. I want to start my career with a company that invests in employee development from day one.' Specific facts = credible. Generic praise = forgotten."
    },
    {
      q: "What are your strengths?",
      tag: "TCS / Infosys / Wipro",
      answer: "Pick one strength + add real evidence. Say: 'I am a quick learner. When I started learning React, I built a fully working project in 3 weeks.' Always give evidence. Never say 'I am hardworking' without proof — every candidate says it."
    },
    {
      q: "What is your weakness?",
      tag: "TCS / Infosys / Wipro",
      answer: "Pick a REAL weakness you are improving. Say: 'I sometimes spend too much time perfecting code before showing it. I now set a 2-hour limit before reviewing with a peer.' Never say 'I am a perfectionist' — every interviewer has heard it 1000 times."
    },
    {
      q: "Where do you see yourself in 5 years?",
      tag: "TCS / Infosys / Wipro",
      answer: "Say you see yourself growing WITHIN this company. Say: 'I see myself taking on more responsibilities within this company, moving toward a senior developer or team lead role after building strong domain expertise.' Never mention MBA or startup plans — it signals you will leave early."
    },
    {
      q: "Why should we hire you?",
      tag: "TCS / Infosys / Wipro",
      answer: "Use 3 parts: Skill + Proof + Motivation. Say: 'I bring strong web development skills, proven through a live project that is deployed on GitHub. I am genuinely motivated by the scale of work at this company. That combination of ability, evidence, and drive makes me a strong fit.'"
    },
    {
      q: "Tell me about a project you built",
      tag: "TCS / Infosys / Wipro",
      answer: "Use this structure: Problem → Solution → Tech stack → Result → What you learned. Example: 'I noticed CS students had no single place for placement prep, so I built PrepPath — a full roadmap website using HTML, CSS and JavaScript. It covers DSA, mock interviews, and projects. I learned how to structure large front-end projects and ship something real.'"
    },
    {
      q: "How do you handle pressure?",
      tag: "TCS / Infosys / Wipro",
      answer: "Give a real example, not a philosophy. Say: 'During my final semester I had exams, a project deadline, and a hackathon in the same week. I made a daily priority list, worked in focused 2-hour blocks, and submitted everything on time. Pressure sharpens my focus when I plan ahead.'"
    },
    {
      q: "Are you a team player or independent worker?",
      tag: "TCS / Infosys / Wipro",
      answer: "Never pick only one. Say: 'I adapt based on what the situation needs. For design and debugging I actively collaborate. For focused coding I work independently. The best engineers know when to do each — and I practice both.'"
    },
    {
      q: "What do you know about our company?",
      tag: "TCS / Infosys / Wipro",
      answer: "Research before you go. For Infosys say: 'Infosys was founded in 1981, serves clients in 50 countries, and recently expanded its AI and cloud services division. It is one of India's most respected IT exporters.' One specific fact impresses more than generic praise."
    },
    {
      q: "What is your expected salary?",
      tag: "TCS / Infosys / Wipro",
      answer: "For freshers say: 'I am aware of the standard CTC offered for this role and I am completely okay with it. I am more focused on learning and growth at this stage of my career.' Never quote a specific number unless they insist repeatedly."
    },
    {
      q: "Do you have any questions for me?",
      tag: "TCS / Infosys / Wipro",
      answer: "Always have 2 questions ready. Never say 'No I am good.' Good questions: 'What does the training process look like for freshers in the first 3 months?' and 'What does success look like in this role in the first 6 months?' Never ask about salary, WFH, or leave in round 1."
    },
    {
      q: "Describe yourself in 3 words",
      tag: "TCS / Infosys / Wipro",
      answer: "Pick professional + specific words. Say: 'Curious, reliable, and solution-oriented.' Then give one-line evidence for each word. Avoid: hardworking, dedicated, passionate — every candidate uses these. Stand out with something specific to you."
    },
    {
      q: "Are you open to working in different technologies?",
      tag: "TCS / Infosys / Wipro",
      answer: "Always yes. Say: 'Absolutely. I believe a strong foundation in programming fundamentals makes learning any new technology faster. I am comfortable switching stacks based on project requirements and have already learned multiple languages in college.'"
    }
  ],
  product: [
    {
      q: "Tell me about a time you failed",
      tag: "Amazon / Google LP: Ownership",
      answer: "NEVER say you never failed. Structure: 'In my [project], I [specific failure]. The consequence was [impact]. I realized [lesson]. I then [specific change I made]. The result improved to [outcome].' Self-awareness beats perfection. The candidate who owns a real failure and shows growth beats the one who claims to never fail."
    },
    {
      q: "Describe a time you showed ownership beyond your role",
      tag: "Amazon LP: Ownership",
      answer: "Find a real example where you did something extra without being asked — fixed a bug in someone else's code, documented something for the team, stayed to help a teammate. Always say 'I' not 'we' in STAR answers. 'We' hides your individual contribution."
    },
    {
      q: "Tell me about a time you made a fast decision with limited info",
      tag: "Amazon LP: Bias for Action",
      answer: "Show decisiveness. Say: 'In our hackathon, the API we planned to use went down 2 hours before submission. I immediately switched to a backup plan, reassigned tasks, and we submitted on time and placed 3rd out of 40 teams.' Speed + result = strong answer."
    },
    {
      q: "Describe a conflict with a teammate and how you resolved it",
      tag: "Amazon LP: Earn Trust",
      answer: "Never say you avoid conflict. Say: 'My teammate and I disagreed about the database schema. I requested a 1:1, listened to their reasoning fully first, then shared my view backed by performance benchmarks. We agreed on a hybrid approach. The result was 30% better query speed.' Show maturity, not avoidance."
    },
    {
      q: "Tell me about your biggest achievement",
      tag: "Amazon LP: Deliver Results",
      answer: "Quantify everything. Weak: 'I built a good project.' Strong: 'I built a system that reduced issue resolution time for 200 students from 7 days to 24 hours. I built it in 3 weeks, got 85% adoption in the first month, and it is still running today.' Numbers make you memorable."
    },
    {
      q: "Why Amazon / Google / Flipkart?",
      tag: "Amazon LP: Customer Obsession",
      answer: "Show personal connection to their product. Say: 'I have used Amazon's recommendation engine as a customer and I want to build those systems. The scale of impact — serving 300 million customers — is what drives me here specifically, not just the brand name.' Generic answers fail here every time."
    },
    {
      q: "How do you handle disagreement with your manager?",
      tag: "Amazon LP: Have Backbone; Disagree and Commit",
      answer: "Show you speak up AND commit once decided. Say: 'I clearly share my data-backed reasoning once. If they decide differently after hearing me, I commit fully and make that decision succeed. I disagree loudly once, then execute 100% on whatever is decided.' This shows both courage and professionalism."
    },
    {
      q: "Tell me about a time you simplified something complex",
      tag: "Amazon LP: Invent and Simplify",
      answer: "Find a real example. Show you default to simple over clever. Say: 'I rewrote our project's API layer that was 200 lines of tangled code into 30 clean lines using a standard pattern. It was easier to read, easier to test, and ran 40% faster. Simplicity was the right choice.'"
    },
    {
      q: "Describe a time you went deep into a problem others missed",
      tag: "Amazon LP: Dive Deep",
      answer: "Show curiosity and rigor. Say: 'During testing I noticed an edge case no one had caught. I traced it through 5 layers of the codebase, found a race condition in the data fetch, and fixed it before release. It would have affected 20% of users in production silently.'"
    },
    {
      q: "Tell me about a time you held a high bar others wanted to lower",
      tag: "Amazon LP: Insist on Highest Standards",
      answer: "Show you do not accept good enough. Say: 'In our group project, I pushed the team to refactor before submission even though it already worked. The cleaner version was 40% faster, better documented, and got us extra marks in the review. The extra 4 hours were worth it.'"
    },
    {
      q: "How do you handle feedback you disagree with?",
      tag: "Amazon LP: Earn Trust",
      answer: "Show openness without being a pushover. Say: 'I listen fully without interrupting first. Then I ask clarifying questions to understand the reasoning. If I still disagree, I share my perspective with specific data. But I keep an open mind that I might be wrong — and I often discover I missed something.'"
    },
    {
      q: "Tell me about a time you had to learn something completely new fast",
      tag: "Amazon LP: Learn and Be Curious",
      answer: "Show speed + method. Say: 'I had 1 week to learn Docker for our project deployment. I spent 3 hours on official documentation, 3 hours on a hands-on tutorial, then immediately applied it to our real project. It worked in production on the first try. I learn fastest by building something real immediately.'"
    },
    {
      q: "Describe a time you took a calculated risk",
      tag: "Amazon LP: Bias for Action",
      answer: "Show risk assessment + decisive action. Say: 'I chose to rebuild our database schema 2 days before our project submission because the old one would not scale. I assessed the risk, created a backup, made the change in 6 hours. It worked and improved our query speed by 3x. The risk was worth taking.'"
    },
    {
      q: "How do you prioritize when everything feels urgent?",
      tag: "Amazon LP: Deliver Results",
      answer: "Show a clear framework. Say: 'I list all tasks, estimate the impact and effort for each, then prioritize high-impact-low-effort first. I communicate early about what will slip if needed. I never silently miss a deadline — I always flag it early with a new plan.'"
    },
    {
      q: "Do you have any questions for me?",
      tag: "Amazon / Google / Flipkart",
      answer: "Must ask 2 good questions. Say: 'What does the biggest growth opportunity look like for someone in this role in year 1?' and 'What separates the good engineers from the truly great ones on your team?' Never ask about salary, equity, WFH, or perks in the HR round."
    }
  ]
};

let currentMode = 'service';
let currentIndex = 0;
let answerVisible = false;

function openHRModal() {
  const existing = document.getElementById('hr-modal-overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.id = 'hr-modal-overlay';
  overlay.style.cssText = `
    position:fixed;top:0;left:0;width:100%;height:100%;
    background:rgba(0,0,0,0.85);z-index:99999;
    display:flex;align-items:center;justify-content:center;
    padding:20px;box-sizing:border-box;
    animation:hrFadeIn 0.3s ease;
  `;

  overlay.innerHTML = `
    <style>
      @keyframes hrFadeIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
      @keyframes hrSlideDown{from{max-height:0;opacity:0}to{max-height:600px;opacity:1}}
      #hr-modal-box{background:#1a1a2e;border-radius:16px;padding:28px;width:100%;max-width:680px;max-height:90vh;overflow-y:auto;position:relative;border:1px solid rgba(255,255,255,0.1);}
      #hr-modal-box::-webkit-scrollbar{width:4px}
      #hr-modal-box::-webkit-scrollbar-thumb{background:#6c63ff;border-radius:2px}
      .hr-close{position:absolute;top:16px;right:16px;background:rgba(255,255,255,0.1);border:none;color:#fff;width:32px;height:32px;border-radius:50%;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;}
      .hr-close:hover{background:rgba(255,255,255,0.2)}
      .hr-badge{display:inline-block;background:linear-gradient(135deg,#6c63ff,#ff6584);color:#fff;padding:4px 14px;border-radius:20px;font-size:12px;font-weight:600;margin-bottom:12px;}
      .hr-title{font-size:22px;font-weight:700;color:#fff;margin-bottom:6px;}
      .hr-subtitle{font-size:13px;color:rgba(255,255,255,0.5);margin-bottom:20px;}
      .hr-mode-tabs{display:flex;gap:8px;margin-bottom:20px;}
      .hr-mode-btn{flex:1;padding:10px;border-radius:10px;border:1px solid rgba(255,255,255,0.15);background:transparent;color:rgba(255,255,255,0.6);cursor:pointer;font-size:13px;font-weight:500;transition:all 0.2s;}
      .hr-mode-btn.active-service{background:linear-gradient(135deg,#1D9E75,#0F6E56);color:#fff;border-color:transparent;}
      .hr-mode-btn.active-product{background:linear-gradient(135deg,#6c63ff,#534AB7);color:#fff;border-color:transparent;}
      .hr-mode-btn:hover:not(.active-service):not(.active-product){background:rgba(255,255,255,0.08);}
      .hr-info-box{border-radius:10px;padding:14px;margin-bottom:16px;}
      .hr-info-service{background:rgba(29,158,117,0.15);border:1px solid rgba(29,158,117,0.3);}
      .hr-info-product{background:rgba(108,99,255,0.15);border:1px solid rgba(108,99,255,0.3);}
      .hr-info-title{font-size:12px;font-weight:600;color:rgba(255,255,255,0.5);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;}
      .hr-info-list{list-style:none;padding:0;margin:0;}
      .hr-info-list li{font-size:13px;color:rgba(255,255,255,0.8);padding:3px 0;display:flex;gap:8px;align-items:flex-start;}
      .hr-3min{background:rgba(186,117,23,0.15);border:1px solid rgba(186,117,23,0.4);border-radius:10px;padding:14px;margin-bottom:20px;}
      .hr-3min-title{font-size:13px;font-weight:600;color:#EF9F27;margin-bottom:6px;}
      .hr-3min-text{font-size:12px;color:rgba(255,255,255,0.7);line-height:1.6;}
      .hr-start-btns{display:flex;gap:10px;margin-bottom:0;}
      .hr-start-service{flex:1;padding:12px;border-radius:10px;background:linear-gradient(135deg,#1D9E75,#0F6E56);color:#fff;border:none;cursor:pointer;font-size:13px;font-weight:600;}
      .hr-start-product{flex:1;padding:12px;border-radius:10px;background:linear-gradient(135deg,#6c63ff,#534AB7);color:#fff;border:none;cursor:pointer;font-size:13px;font-weight:600;}
      .hr-start-service:hover{opacity:0.9} .hr-start-product:hover{opacity:0.9}
      .hr-q-panel{display:none;}
      .hr-q-panel.visible{display:block;}
      .hr-progress{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;}
      .hr-progress-text{font-size:13px;color:rgba(255,255,255,0.5);}
      .hr-progress-bar{height:4px;background:rgba(255,255,255,0.1);border-radius:2px;flex:1;margin:0 12px;}
      .hr-progress-fill{height:100%;border-radius:2px;transition:width 0.3s ease;}
      .hr-progress-fill-service{background:#1D9E75;}
      .hr-progress-fill-product{background:#6c63ff;}
      .hr-q-tag{display:inline-block;font-size:11px;padding:3px 10px;border-radius:10px;margin-bottom:10px;font-weight:500;}
      .hr-q-tag-service{background:rgba(29,158,117,0.2);color:#5DCAA5;}
      .hr-q-tag-product{background:rgba(108,99,255,0.2);color:#AFA9EC;}
      .hr-q-text{font-size:18px;font-weight:600;color:#fff;margin-bottom:16px;line-height:1.4;}
      .hr-reveal-btn{width:100%;padding:12px;border-radius:10px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.8);cursor:pointer;font-size:13px;margin-bottom:12px;transition:all 0.2s;}
      .hr-reveal-btn:hover{background:rgba(255,255,255,0.12);}
      .hr-answer-box{background:rgba(255,255,255,0.05);border-radius:10px;padding:16px;margin-bottom:16px;border-left:3px solid #6c63ff;overflow:hidden;animation:hrSlideDown 0.3s ease;}
      .hr-answer-box-service{border-left-color:#1D9E75;}
      .hr-answer-label{font-size:11px;font-weight:600;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;}
      .hr-answer-text{font-size:13px;color:rgba(255,255,255,0.85);line-height:1.7;}
      .hr-nav{display:flex;gap:10px;margin-top:4px;}
      .hr-prev,.hr-next{padding:10px 20px;border-radius:10px;border:1px solid rgba(255,255,255,0.15);background:transparent;color:rgba(255,255,255,0.7);cursor:pointer;font-size:13px;transition:all 0.2s;}
      .hr-prev:hover,.hr-next:hover{background:rgba(255,255,255,0.08);}
      .hr-next{margin-left:auto;}
      .hr-next-service{background:#1D9E75!important;border-color:transparent!important;color:#fff!important;}
      .hr-next-product{background:#6c63ff!important;border-color:transparent!important;color:#fff!important;}
      .hr-complete{text-align:center;padding:20px 0;}
      .hr-complete-icon{font-size:40px;margin-bottom:12px;}
      .hr-complete-title{font-size:18px;font-weight:600;color:#fff;margin-bottom:8px;}
      .hr-complete-text{font-size:13px;color:rgba(255,255,255,0.6);margin-bottom:20px;line-height:1.6;}
      .hr-restart-btn{padding:12px 28px;border-radius:10px;background:linear-gradient(135deg,#6c63ff,#534AB7);color:#fff;border:none;cursor:pointer;font-size:13px;font-weight:600;}
    </style>

    <div id="hr-modal-box">
      <button class="hr-close" onclick="closeHRModal()">✕</button>
      
      <div id="hr-intro-panel">
        <div class="hr-badge">🎯 HR Round Preparation</div>
        <div class="hr-title">What HR is Actually Testing</div>
        <div class="hr-subtitle">The rules are completely different for service vs product companies. Know the difference before you walk in.</div>
        
        <div class="hr-info-box hr-info-service">
          <div class="hr-info-title">🏢 Service Companies — TCS / Infosys / Wipro / Cognizant</div>
          <ul class="hr-info-list">
            <li><span style="color:#5DCAA5">✓</span> Will you accept any project / shift / location?</li>
            <li><span style="color:#5DCAA5">✓</span> Are you a team player with no ego?</li>
            <li><span style="color:#5DCAA5">✓</span> Will you stay for 2+ years (bond)?</li>
            <li><span style="color:#5DCAA5">✓</span> Can you communicate in basic English?</li>
            <li><span style="color:#5DCAA5">✓</span> Are you flexible and adaptable?</li>
          </ul>
        </div>
        
        <div class="hr-info-box hr-info-product">
          <div class="hr-info-title">🚀 Product Companies — Amazon / Google / Flipkart / Microsoft</div>
          <ul class="hr-info-list">
            <li><span style="color:#AFA9EC">★</span> Do you align with company values/principles?</li>
            <li><span style="color:#AFA9EC">★</span> Can you handle ownership and ambiguity?</li>
            <li><span style="color:#AFA9EC">★</span> Do you have real examples of impact?</li>
            <li><span style="color:#AFA9EC">★</span> How do you handle failure and feedback?</li>
            <li><span style="color:#AFA9EC">★</span> Will you challenge the status quo?</li>
          </ul>
        </div>
        
        <div class="hr-3min">
          <div class="hr-3min-title">⚡ The 3-Minute Rule</div>
          <div class="hr-3min-text">Most HR interviewers decide in the first 3 minutes. Your entry, greeting, first answer to "tell me about yourself" — this window decides 70% of their impression. Prepare those first 3 minutes perfectly. Practice your intro out loud 10 times before the interview.</div>
        </div>
        
        <div class="hr-start-btns">
          <button class="hr-start-service" onclick="startPractice('service')">🏢 Practice Service Company HR →</button>
          <button class="hr-start-product" onclick="startPractice('product')">🚀 Practice Product Company HR →</button>
        </div>
      </div>

      <div id="hr-q-panel" class="hr-q-panel">
        <div class="hr-progress">
          <span class="hr-progress-text" id="hr-progress-text">Question 1 of 15</span>
          <div class="hr-progress-bar"><div class="hr-progress-fill" id="hr-progress-fill" style="width:6%"></div></div>
          <button onclick="showIntro()" style="background:none;border:none;color:rgba(255,255,255,0.4);cursor:pointer;font-size:12px;">← Back</button>
        </div>
        <div id="hr-q-tag" class="hr-q-tag hr-q-tag-service"></div>
        <div id="hr-q-text" class="hr-q-text"></div>
        <button class="hr-reveal-btn" id="hr-reveal-btn" onclick="toggleAnswer()">💡 Show Sample Answer</button>
        <div id="hr-answer-box" style="display:none"></div>
        <div class="hr-nav">
          <button class="hr-prev" onclick="prevQ()">← Previous</button>
          <button class="hr-next" id="hr-next-btn" onclick="nextQ()">Next →</button>
        </div>
      </div>

      <div id="hr-complete-panel" style="display:none">
        <div class="hr-complete">
          <div class="hr-complete-icon">🎉</div>
          <div class="hr-complete-title">Practice Complete!</div>
          <div class="hr-complete-text">You reviewed all 15 <span id="hr-complete-mode"></span> HR questions.<br><br>Now practice saying each answer OUT LOUD. Record yourself once on your phone. You will immediately hear what needs fixing. The answer that sounds perfect in your head sounds different when spoken.</div>
          <button class="hr-restart-btn" onclick="startPractice(currentMode)">Practice Again →</button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeHRModal();
  });

  document.addEventListener('keydown', hrKeyHandler);
}

function hrKeyHandler(e) {
  if (e.key === 'Escape') closeHRModal();
  if (e.key === 'ArrowRight') nextQ();
  if (e.key === 'ArrowLeft') prevQ();
  if (e.key === ' ') { e.preventDefault(); toggleAnswer(); }
}

function closeHRModal() {
  const overlay = document.getElementById('hr-modal-overlay');
  if (overlay) overlay.remove();
  document.removeEventListener('keydown', hrKeyHandler);
}

function showIntro() {
  document.getElementById('hr-intro-panel').style.display = 'block';
  document.getElementById('hr-q-panel').classList.remove('visible');
  document.getElementById('hr-complete-panel').style.display = 'none';
}

function startPractice(mode) {
  currentMode = mode;
  currentIndex = 0;
  answerVisible = false;
  document.getElementById('hr-intro-panel').style.display = 'none';
  document.getElementById('hr-complete-panel').style.display = 'none';
  document.getElementById('hr-q-panel').classList.add('visible');
  renderQuestion();
}

function renderQuestion() {
  const data = hrData[currentMode];
  const q = data[currentIndex];
  const total = data.length;
  const isService = currentMode === 'service';

  document.getElementById('hr-progress-text').textContent = 
    'Question ' + (currentIndex + 1) + ' of ' + total;
  document.getElementById('hr-progress-fill').style.width = 
    Math.round(((currentIndex + 1) / total) * 100) + '%';
  document.getElementById('hr-progress-fill').className = 
    'hr-progress-fill ' + (isService ? 'hr-progress-fill-service' : 'hr-progress-fill-product');

  const tagEl = document.getElementById('hr-q-tag');
  tagEl.textContent = q.tag;
  tagEl.className = 'hr-q-tag ' + (isService ? 'hr-q-tag-service' : 'hr-q-tag-product');

  document.getElementById('hr-q-text').textContent = q.q;

  const answerBox = document.getElementById('hr-answer-box');
  answerBox.style.display = 'none';
  answerBox.innerHTML = '';
  answerVisible = false;

  const revealBtn = document.getElementById('hr-reveal-btn');
  revealBtn.textContent = '💡 Show Sample Answer';

  const nextBtn = document.getElementById('hr-next-btn');
  nextBtn.textContent = currentIndex === total - 1 ? 'Finish ✓' : 'Next →';
  nextBtn.className = 'hr-next ' + (isService ? 'hr-next-service' : 'hr-next-product');

  const prevBtn = document.querySelector('.hr-prev');
  prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '1';
  prevBtn.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
}

function toggleAnswer() {
  const data = hrData[currentMode];
  const q = data[currentIndex];
  const answerBox = document.getElementById('hr-answer-box');
  const revealBtn = document.getElementById('hr-reveal-btn');
  const isService = currentMode === 'service';

  if (!answerVisible) {
    answerBox.innerHTML = 
      '<div class="hr-answer-box ' + (isService ? 'hr-answer-box-service' : '') + '">' +
      '<div class="hr-answer-label">Sample Answer</div>' +
      '<div class="hr-answer-text">' + q.answer + '</div>' +
      '</div>';
    answerBox.style.display = 'block';
    revealBtn.textContent = '🙈 Hide Sample Answer';
    answerVisible = true;
  } else {
    answerBox.style.display = 'none';
    revealBtn.textContent = '💡 Show Sample Answer';
    answerVisible = false;
  }
}

function nextQ() {
  const total = hrData[currentMode].length;
  if (currentIndex < total - 1) {
    currentIndex++;
    renderQuestion();
    document.getElementById('hr-modal-box').scrollTop = 0;
  } else {
    document.getElementById('hr-q-panel').classList.remove('visible');
    document.getElementById('hr-complete-panel').style.display = 'block';
    document.getElementById('hr-complete-mode').textContent = 
      currentMode === 'service' ? 'Service Company' : 'Product Company';
  }
}

function prevQ() {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
    document.getElementById('hr-modal-box').scrollTop = 0;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const hrBtn = document.getElementById('hr-round-btn');
  if (hrBtn) {
    hrBtn.addEventListener('click', openHRModal);
  }
  
  const allBtns = document.querySelectorAll('button');
  allBtns.forEach(function(btn) {
    if (btn.textContent.includes('HR Round Practice')) {
      btn.addEventListener('click', openHRModal);
    }
  });
});
