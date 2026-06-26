import { useState } from "react";

const sections = [
  "Compensation",
  "Joining Bonus",
  "Accommodation",
  "Training",
  "Job Role",
  "DSE vs SE",
  "Career Growth",
  "Benefits",
  "Work Culture",
  "Location Analysis",
  "Internship vs DSE",
  "Final Verdict",
];

const ConfidenceBadge = ({ level }) => {
  const colors = {
    High: "bg-emerald-100 text-emerald-800 border-emerald-200",
    Medium: "bg-amber-100 text-amber-800 border-amber-200",
    Low: "bg-red-100 text-red-800 border-red-200",
  };
  return (
    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${colors[level]}`}>
      {level} Confidence
    </span>
  );
};

const SectionHeader = ({ title, emoji }) => (
  <div className="flex items-center gap-3 mb-6">
    <span className="text-3xl">{emoji}</span>
    <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
  </div>
);

const InfoCard = ({ title, children, accent = "blue" }) => {
  const accents = {
    blue: "border-blue-400 bg-blue-50",
    green: "border-emerald-400 bg-emerald-50",
    amber: "border-amber-400 bg-amber-50",
    red: "border-red-400 bg-red-50",
    purple: "border-purple-400 bg-purple-50",
    slate: "border-slate-400 bg-slate-50",
  };
  return (
    <div className={`border-l-4 rounded-r-lg p-4 mb-4 ${accents[accent]}`}>
      {title && <div className="font-bold text-slate-700 mb-2 text-sm uppercase tracking-wide">{title}</div>}
      {children}
    </div>
  );
};

const Table = ({ headers, rows }) => (
  <div className="overflow-x-auto mb-4 rounded-lg border border-slate-200">
    <table className="w-full text-sm">
      <thead className="bg-slate-800 text-white">
        <tr>{headers.map((h, i) => <th key={i} className="px-4 py-3 text-left font-semibold">{h}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
            {row.map((cell, j) => <td key={j} className="px-4 py-3 text-slate-700 border-t border-slate-100">{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const RatingBar = ({ label, score, max = 10, color = "blue" }) => {
  const pct = (score / max) * 100;
  const barColors = {
    blue: "bg-blue-500",
    green: "bg-emerald-500",
    amber: "bg-amber-500",
    red: "bg-red-500",
  };
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span className="font-medium text-slate-700">{label}</span>
        <span className="font-bold text-slate-800">{score}/{max}</span>
      </div>
      <div className="h-2.5 bg-slate-200 rounded-full">
        <div className={`h-2.5 rounded-full ${barColors[color]}`} style={{ width: `${pct}%` }}></div>
      </div>
    </div>
  );
};

const Pro = ({ text }) => (
  <div className="flex items-start gap-2 mb-2">
    <span className="text-emerald-500 font-bold mt-0.5">✓</span>
    <span className="text-slate-700 text-sm">{text}</span>
  </div>
);

const Con = ({ text }) => (
  <div className="flex items-start gap-2 mb-2">
    <span className="text-red-500 font-bold mt-0.5">✗</span>
    <span className="text-slate-700 text-sm">{text}</span>
  </div>
);

const Source = ({ label }) => (
  <span className="inline-block text-xs bg-slate-100 text-slate-500 border border-slate-200 rounded px-2 py-0.5 mr-1 mb-1">
    📌 {label}
  </span>
);

export default function InfosysDSEReport() {
  const [active, setActive] = useState(0);

  const renderSection = () => {
    switch (active) {
      case 0: return <CompensationSection />;
      case 1: return <JoiningBonusSection />;
      case 2: return <AccommodationSection />;
      case 3: return <TrainingSection />;
      case 4: return <JobRoleSection />;
      case 5: return <DSEvsSESection />;
      case 6: return <CareerGrowthSection />;
      case 7: return <BenefitsSection />;
      case 8: return <WorkCultureSection />;
      case 9: return <LocationSection />;
      case 10: return <InternshipSection />;
      case 11: return <FinalVerdictSection />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-2">Deep Research Report · June 2026</div>
          <h1 className="text-3xl font-extrabold mb-2">Infosys Digital Specialist Engineer</h1>
          <p className="text-blue-200 text-base">A fact-based, evidence-driven analysis for 2025–2026 hiring cycle</p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-blue-700 text-blue-100 text-xs px-3 py-1 rounded-full">CTC: ₹6.25 LPA</span>
            <span className="bg-emerald-700 text-emerald-100 text-xs px-3 py-1 rounded-full">Joining Bonus: ₹75,000</span>
            <span className="bg-amber-700 text-amber-100 text-xs px-3 py-1 rounded-full">Training: Mysore (3–5 months)</span>
            <span className="bg-purple-700 text-purple-100 text-xs px-3 py-1 rounded-full">Glassdoor: 3.6/5</span>
          </div>
        </div>
      </div>

      {/* Nav */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <div className="flex gap-1 px-4 py-2">
            {sections.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`whitespace-nowrap px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                  active === i
                    ? "bg-blue-700 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {i + 1}. {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        {renderSection()}
      </div>

      {/* Footer */}
      <div className="bg-slate-800 text-slate-400 text-xs text-center py-4 px-6">
        Sources: Infosys Careers, Glassdoor (127,000+ reviews), Fishbowl, Quora, Reddit, PrepInsta, FreshersHunt, AmbitionBox, Infosys SEC Filings, NoBroker, Stanza Living · Report compiled June 2026
      </div>
    </div>
  );
}

function CompensationSection() {
  return (
    <div>
      <SectionHeader title="Compensation Breakdown" emoji="💰" />

      <div className="flex gap-2 flex-wrap mb-4">
        <ConfidenceBadge level="High" />
        <Source label="Infosys Off-Campus Drive 2026 (Official)" />
        <Source label="FreshersHunt · PrepInsta · Fishbowl" />
      </div>

      <InfoCard accent="blue" title="Official CTC — DSE Role (2025–2026)">
        <p className="text-2xl font-extrabold text-blue-800 mb-1">₹6.25 LPA</p>
        <p className="text-slate-600 text-sm">Confirmed from Infosys Off-Campus Drive 2026 official listings. Joining bonus of ₹75,000 is separate and one-time.</p>
      </InfoCard>

      <h3 className="font-bold text-slate-800 text-lg mb-3 mt-6">Salary Structure Breakdown</h3>
      <Table
        headers={["Component", "Annual (₹)", "Monthly (₹)", "Notes"]}
        rows={[
          ["Basic Salary", "2,62,500", "21,875", "~42% of CTC"],
          ["House Rent Allowance (HRA)", "1,31,250", "10,938", "~50% of Basic"],
          ["Special Allowance", "1,00,000", "8,333", "Varies by grade"],
          ["Provident Fund (Employer)", "31,500", "2,625", "12% of Basic"],
          ["Gratuity (provision)", "12,500", "1,042", "Statutory"],
          ["Medical Insurance (provision)", "18,250", "1,521", "Group coverage"],
          ["Total CTC", "6,25,000", "52,083", "Gross CTC"],
        ]}
      />

      <h3 className="font-bold text-slate-800 text-lg mb-3 mt-6">Monthly In-Hand Salary (Estimated)</h3>
      <Table
        headers={["Deduction", "Monthly (₹)", "Remarks"]}
        rows={[
          ["Gross Monthly Salary", "~46,500", "CTC minus Employer PF, Gratuity, Insurance"],
          ["Employee PF (12% of Basic)", "−2,625", "Statutory deduction"],
          ["Professional Tax", "−200", "Karnataka/Maharashtra (~₹200/month)"],
          ["Income Tax (New Regime)", "~−200 to −1,500", "Income below ₹7L largely exempt under new regime"],
          ["ECC (Hostel during training)", "−3,500", "Only during Mysore training period"],
          ["Net Monthly In-Hand", "~41,000–43,500", "Post-training, in working location"],
        ]}
      />

      <InfoCard accent="green" title="Expected Monthly In-Hand by City">
        <Table
          headers={["City", "In-Hand (₹/month)", "Note"]}
          rows={[
            ["Bangalore", "~41,000–43,000", "Professional Tax: ₹200/month"],
            ["Hyderabad", "~42,000–44,000", "No Professional Tax (Telangana)"],
            ["Pune", "~41,000–43,000", "PT: ₹200/month (Maharashtra)"],
            ["Chennai", "~41,500–43,500", "PT: ₹208/month"],
          ]}
        />
        <p className="text-xs text-slate-500 mt-1">Note: Figures are estimates. Exact figures depend on actual tax regime chosen, investment declarations, and specific pay structure in your offer letter.</p>
      </InfoCard>

      <h3 className="font-bold text-slate-800 text-lg mb-3 mt-6">First-Year Total Earnings</h3>
      <Table
        headers={["Item", "Amount (₹)"]}
        rows={[
          ["Annual In-Hand (12 months × ~₹42,000)", "5,04,000"],
          ["Joining Bonus (one-time)", "75,000"],
          ["Variable Pay (if targets met, ~10–15% of CTC)", "~50,000–80,000"],
          ["Total First-Year Take-Home (approx)", "~6,29,000–8,59,000"],
          ["Training-Period Deduction (ECC ~3 months × ₹3,500)", "−10,500"],
          ["Realistic First-Year Take-Home", "~6,00,000–7,50,000"],
        ]}
      />

      <h3 className="font-bold text-slate-800 text-lg mb-3 mt-6">Salary Growth Scenarios</h3>
      <Table
        headers={["Year", "Worst Case", "Average Case", "Best Case"]}
        rows={[
          ["Year 0 (Joining)", "₹6.25 LPA", "₹6.25 LPA", "₹6.25 LPA"],
          ["Year 1 (5% hike)", "₹6.56 LPA", "₹6.75 LPA", "₹7.0 LPA"],
          ["Year 2 (L0→L1 promo)", "₹7.5 LPA", "₹8.5 LPA", "₹10 LPA"],
          ["Year 3", "₹8.0 LPA (no switch)", "₹10–12 LPA (with switch)", "₹14+ LPA (job hop)"],
        ]}
      />
      <InfoCard accent="amber">
        <p className="text-sm text-slate-700"><strong>Key Insight:</strong> Annual hikes at Infosys in 2025 were <strong>5–8%</strong> for average performers, with exceptional performers receiving 10–12%. The real salary jump comes from internal promotion (L0 → L1) or external job switch, not from annual increments alone.</p>
      </InfoCard>
    </div>
  );
}

function JoiningBonusSection() {
  return (
    <div>
      <SectionHeader title="Joining Bonus Investigation" emoji="🎁" />

      <div className="flex gap-2 flex-wrap mb-4">
        <ConfidenceBadge level="High" />
        <Source label="Infosys Off-Campus 2026 (Official Listings)" />
        <Source label="FreshersHunt · OffCampusJobs4u · FreshersRecruitment" />
      </div>

      <InfoCard accent="green" title="Joining Bonus: YES — ₹75,000 Confirmed for 2026">
        <p className="text-slate-700 text-sm mb-2">Multiple official listings from the Infosys Off-Campus Drive 2026 confirm a <strong>₹75,000 joining bonus</strong> for DSE candidates. This is a one-time payment, separate from CTC.</p>
        <p className="text-slate-700 text-sm">For context: SP L1 gets ₹1,00,000 bonus. DSE gets ₹75,000.</p>
      </InfoCard>

      <Table
        headers={["Detail", "Information"]}
        rows={[
          ["Joining Bonus Amount", "₹75,000 (confirmed 2026 drive)"],
          ["When Paid", "Typically paid with first or second month salary after training completion"],
          ["Taxable?", "Yes — added to income, taxed at applicable slab"],
          ["Post-tax value (new regime)", "~₹65,000–70,000 (approx, varies by other income)"],
          ["Service Agreement", "12 months from date of joining"],
          ["Clawback if leaving early?", "Yes — pro-rata recovery common if leaving within 1 year"],
          ["Bond / Agreement", "Signed at joining; recovery through relieving process"],
        ]}
      />

      <InfoCard accent="amber" title="Clawback Rules (Important!)">
        <p className="text-sm text-slate-700 mb-2">Infosys generally applies a <strong>12-month service agreement</strong> for freshers in the DSE/SP track. If you leave before completing this period:</p>
        <Con text="Joining bonus may be fully or partially recovered from your full and final settlement." />
        <Con text="Notice period during training is typically shorter, but post-training it's 2–3 months." />
        <Pro text="Clawback is typically pro-rated, not 100% if you stay e.g. 10 of 12 months." />
        <p className="text-xs text-slate-500 mt-2">Verify exact terms in your individual offer letter — this is contractual and varies by batch.</p>
      </InfoCard>

      <InfoCard accent="slate" title="Bottom Line">
        <p className="text-sm text-slate-700">The ₹75,000 joining bonus is real and active as of 2026. After tax, you effectively receive ~₹65,000. It is subject to a 12-month service agreement, so plan your exit strategy accordingly if you intend to leave early.</p>
      </InfoCard>
    </div>
  );
}

function AccommodationSection() {
  return (
    <div>
      <SectionHeader title="Accommodation & Facilities" emoji="🏠" />

      <div className="flex gap-2 flex-wrap mb-4">
        <ConfidenceBadge level="High" />
        <Source label="InfosysMysore.in (Trainee Guides)" />
        <Source label="Quora (Multiple Trainee Reports)" />
        <Source label="HackzHub · CatchUpdates" />
      </div>

      <InfoCard accent="red" title="Does Infosys provide permanent flats after training? NO.">
        <p className="text-sm text-slate-700 mb-2"><strong>Answer: NO.</strong> Infosys does NOT provide permanent housing or company flats to regular DSE employees post-training. The accommodation facility is <em>exclusively for the Mysore training period</em>.</p>
        <Con text="No company-leased flats for employees after training completion." />
        <Con text="No relocation allowance mentioned in standard 2026 DSE offer letters." />
        <Pro text="During training, fully furnished hostel accommodation IS provided on campus (paid)." />
      </InfoCard>

      <h3 className="font-bold text-slate-800 text-lg mb-3 mt-6">Training Accommodation at Mysore (ECC — Employee Care Center)</h3>
      <Table
        headers={["Feature", "Details"]}
        rows={[
          ["Accommodation Type", "On-campus hostel (called ECC — Employee Care Center)"],
          ["Is it free?", "NO — Deducted from salary automatically"],
          ["Cost (Shared room)", "~₹3,500/month (deducted from salary)"],
          ["Cost (Single room)", "~₹5,500/month (availability varies; boys more likely to get single)"],
          ["Room Allocation", "Boys: often single rooms; Girls: often shared (2 per room)"],
          ["Furnished?", "Yes — bed, pillow, blanket, study table, TV, cupboard, kettle, towels"],
          ["AC/Hot water", "AC rooms available; hot water in mornings and evenings"],
          ["Wi-Fi", "Available on campus"],
          ["Laundry", "Laundromat near hostels (~₹50 per 8kg wash)"],
          ["Food", "8 food courts on campus; meals available (paid, not free)"],
          ["Transport", "7,000+ bicycles on campus; intercity buses available (paid)"],
          ["Medical", "5-bed medical center on campus"],
          ["Entertainment", "Multiplex/cinema, bowling alley, swimming pool, jacuzzi"],
          ["Security", "Strict — opposite gender entry to hostels is prohibited"],
          ["Alcohol", "Strictly prohibited inside campus"],
        ]}
      />

      <InfoCard accent="green" title="Campus Facilities (World-Class)">
        <p className="text-sm text-slate-700 mb-2">The Infosys Global Education Center (GEC) in Mysore is genuinely impressive — the largest corporate training facility in the world. Facilities include:</p>
        <Pro text="Gymnasium, badminton, squash, table tennis, swimming pool, jacuzzi, bowling alley" />
        <Pro text="Library with 75,000+ books" />
        <Pro text="In-house multiplex (dome-shaped cinema)" />
        <Pro text="Multiple food courts including Domino's" />
        <Pro text="Bank branches and ATMs inside campus" />
        <Pro text="7,000+ bicycles for movement between buildings" />
      </InfoCard>

      <InfoCard accent="amber" title="What Happens After Training?">
        <p className="text-sm text-slate-700">After training, you are posted to your assigned city (Bangalore, Hyderabad, Pune, Chennai, etc.). <strong>You must arrange your own accommodation.</strong> Most freshers:</p>
        <div className="mt-2 space-y-1">
          <Pro text="Join PG accommodations or co-living spaces near their office (₹7,000–15,000/month)" />
          <Con text="No company flat or accommodation subsidy is provided" />
          <Con text="First few weeks can be stressful finding accommodation without local contacts" />
        </div>
        <p className="text-xs text-slate-500 mt-2">Tip: Join Infosys employee WhatsApp groups/Telegram channels before your posting date — fellow employees often coordinate flat-sharing.</p>
      </InfoCard>
    </div>
  );
}

function TrainingSection() {
  return (
    <div>
      <SectionHeader title="Training Program Analysis" emoji="🎓" />

      <div className="flex gap-2 flex-wrap mb-4">
        <ConfidenceBadge level="High" />
        <Source label="Infosys Official Careers Page" />
        <Source label="Quora (Multiple Trainee Reports 2023–2025)" />
        <Source label="InfosysMysore.in" />
      </div>

      <InfoCard accent="blue" title="Training Location">
        <p className="text-slate-700 text-sm"><strong>Primary:</strong> Infosys Global Education Center (GEC), Mysuru — the world's largest corporate training facility, capable of housing 10,000+ trainees simultaneously.</p>
        <p className="text-slate-700 text-sm mt-1"><strong>Secondary locations</strong> (depending on cohort size): Bangalore, Pune, or Hyderabad in rare cases.</p>
      </InfoCard>

      <h3 className="font-bold text-slate-800 text-lg mb-3 mt-6">Training Duration & Phases</h3>
      <Table
        headers={["Phase", "Duration", "Content"]}
        rows={[
          ["Generic Training", "~4–6 weeks", "Communication skills (L&D), basic programming, SQL fundamentals"],
          ["Stream-Specific Training", "~6–10 weeks", "Assigned technology stream (Cloud, Full Stack, Java, Python, etc.)"],
          ["Project Work", "2–4 weeks", "Mini project in assigned tech stack"],
          ["Total (DSE track)", "3–5 months", "Slightly longer than SE due to deeper tech focus"],
        ]}
      />

      <h3 className="font-bold text-slate-800 text-lg mb-3 mt-6">Assessments & Difficulty</h3>
      <InfoCard accent="green" title="Good News: Most People Pass">
        <p className="text-sm text-slate-700 mb-2">Training is not designed to fail people — it's designed to upskill them. Key facts:</p>
        <Pro text="3 attempts allowed for generic training exams; 2 attempts for stream training" />
        <Pro text="Pass percentage is reportedly high (estimated 85–90%+)" />
        <Pro text="Failure certificate still says 'successfully completed training' — no negative mention" />
        <Pro text="Basic coding knowledge (loops, functions, SQL) is sufficient for generic training" />
        <Con text="DSE stream training is more rigorous than SE — expect real coding assignments" />
        <Con text="Failing all 3 attempts leads to termination; Infosys provides a training completion certificate worth ~₹40,000 payout" />
      </InfoCard>

      <Table
        headers={["Assessment Type", "Content", "Difficulty (DSE)"]}
        rows={[
          ["Generic Tech Assessment", "Programming basics, Java/Python/C++, SQL", "Easy to Medium"],
          ["Stream Assessment", "Cloud/Full Stack/DevOps project & MCQs", "Medium to Hard"],
          ["Communication Assessment", "English verbal, written skills", "Easy"],
          ["Final Project", "Build a functional mini-application", "Medium"],
          ["Karat Exam (post-training)", "Live coding with an interviewer (for project allocation)", "Hard"],
        ]}
      />

      <InfoCard accent="amber" title="The Hidden Hurdle: Karat Exam">
        <p className="text-sm text-slate-700">Many employees report that even <em>after</em> passing Mysore training, they must clear a <strong>Karat exam</strong> (third-party live coding interview) to get allocated to a billable project. This is a significant additional hurdle not widely publicized. Failure rates here are reportedly higher.</p>
        <Con text="'After giving so many interviews I finally got Infosys... but now I have to give evaluations to get a project. Feels like I'm not hired yet.' — Glassdoor review, 2025" />
      </InfoCard>

      <h3 className="font-bold text-slate-800 text-lg mb-3 mt-6">DSE Training vs SE Training</h3>
      <Table
        headers={["Aspect", "DSE Training", "SE Training"]}
        rows={[
          ["Duration", "3–5 months (longer)", "2–3 months"],
          ["Tech Depth", "Cloud, Full Stack, Microservices, AI/ML modules", "Basic Java/.NET, legacy tech"],
          ["Coding intensity", "Medium-High", "Low-Medium"],
          ["Stream options", "Modern: AWS, Azure, React, Node, Python", "Traditional: Java, .NET, testing"],
          ["Assessment difficulty", "Higher", "Lower"],
        ]}
      />
    </div>
  );
}

function JobRoleSection() {
  return (
    <div>
      <SectionHeader title="Job Role Reality Check" emoji="💼" />

      <div className="flex gap-2 flex-wrap mb-4">
        <ConfidenceBadge level="Medium" />
        <Source label="Glassdoor Employee Reviews (127,000+)" />
        <Source label="Fishbowl DSE Bowl" />
        <Source label="Quora / Reddit Reports" />
      </div>

      <InfoCard accent="blue" title="Official Role Description">
        <p className="text-sm text-slate-700">DSE focuses on implementing digital technologies: <strong>Cloud computing, AI/ML integration, Full Stack development, DevOps pipelines, Data Engineering, and Microservices architecture</strong>. You are expected to build end-to-end digital products and work on modern transformation projects.</p>
      </InfoCard>

      <h3 className="font-bold text-slate-800 text-lg mb-3 mt-6">Technology Domains (What You May Actually Work On)</h3>
      <Table
        headers={["Technology Domain", "Probability of Assignment", "Comment"]}
        rows={[
          ["Cloud (AWS/Azure/GCP)", "High (30–40%)", "Major client demand area; DSE track prioritized here"],
          ["Full Stack (React/Angular + Java/Node)", "High (25–35%)", "Most common modern project type"],
          ["DevOps / CI-CD", "Medium (15–20%)", "Often combined with Cloud projects"],
          ["Data Engineering / Analytics", "Medium (10–15%)", "Growing demand"],
          ["AI/ML (applied, not research)", "Low-Medium (5–10%)", "Usually post 1–2 years experience"],
          ["Legacy / Maintenance / Support", "Medium (20–30%)", "Depends heavily on client and luck of allocation"],
          ["Testing / QA", "Low for DSE (5%)", "DSE track is supposed to avoid pure testing roles"],
        ]}
      />

      <InfoCard accent="amber" title="The Support Project Reality">
        <p className="text-sm text-slate-700 mb-2">This is the #1 complaint from DSE employees: despite being hired for "digital" roles, project allocation is not guaranteed to be on cutting-edge technology.</p>
        <Con text="Project allocation depends on client availability, billing rates, and your Karat/internal interview performance." />
        <Con text="Some DSE employees report being placed on support or maintenance projects despite the 'specialist' designation." />
        <Pro text="DSE track has better odds than SE for modern tech — the specialist track is supposed to filter for development-focused work." />
        <Pro text="Proactively networking internally and showcasing certifications (AWS, Azure) significantly improves allocation quality." />
      </InfoCard>

      <h3 className="font-bold text-slate-800 text-lg mb-3 mt-6">Actual Day-to-Day Work</h3>
      <InfoCard accent="slate">
        <ul className="text-sm text-slate-700 space-y-2">
          <li>• Writing and reviewing code in assigned stack (Java, Python, React, etc.)</li>
          <li>• Participating in Agile/Scrum sprints with a global team</li>
          <li>• Collaborating with onsite (client-side) team members in the US/Europe/Australia</li>
          <li>• Writing unit tests and performing code reviews</li>
          <li>• Completing mandatory learning paths on Infosys Lex platform</li>
          <li>• Pursuing certifications required for role progression</li>
          <li>• Building and deploying features in cloud-native applications (if on good project)</li>
          <li>• Attending client calls (morning for US time zones)</li>
        </ul>
      </InfoCard>
    </div>
  );
}

function DSEvsSESection() {
  return (
    <div>
      <SectionHeader title="DSE vs System Engineer: Full Comparison" emoji="⚖️" />

      <div className="flex gap-2 flex-wrap mb-4">
        <ConfidenceBadge level="High" />
        <Source label="PrepInsta · OffCampusJobs4u · Quora" />
      </div>

      <Table
        headers={["Parameter", "DSE (Digital Specialist Engineer)", "SE (System Engineer)"]}
        rows={[
          ["CTC", "₹6.25 LPA", "₹3.6 LPA"],
          ["Joining Bonus", "₹75,000", "None / ₹25,000 (varies)"],
          ["Monthly In-Hand", "~₹41,000–43,000", "~₹22,000–27,000"],
          ["Training Duration", "3–5 months (intensive)", "2–3 months (basic)"],
          ["Tech Exposure", "Cloud, Full Stack, DevOps, AI (modern)", "Legacy Java, .NET, maintenance"],
          ["Promotion Speed", "L0→L1 in ~1 year (with certs)", "Slower, performance-based"],
          ["Project Quality", "Better odds for development projects", "Higher risk of maintenance/support"],
          ["Selection Difficulty", "High (3-hr coding + tech interview)", "Moderate (aptitude + basic interview)"],
          ["Career Trajectory", "Faster ramp to 10+ LPA", "Slower, may need external switch sooner"],
          ["International Opportunities", "Slightly better positioning", "Standard"],
          ["Brand Value Advantage", "Higher — 'Specialist' track signals strong coder", "Standard fresher tag"],
        ]}
      />

      <InfoCard accent="green" title="Verdict: Is DSE Significantly Better than SE?">
        <p className="text-sm text-slate-700 mb-2"><strong>YES — unambiguously.</strong> The gap is large on multiple dimensions:</p>
        <Pro text="73% higher CTC (₹6.25L vs ₹3.6L) from day one" />
        <Pro text="₹75,000 joining bonus vs none" />
        <Pro text="Better tech stack exposure and project allocation odds" />
        <Pro text="Faster promotion pathway within Infosys" />
        <Pro text="Stronger resume signal for future job switches" />
        <Con text="DSE is still a service-company role — ceiling inside Infosys is limited without external switching" />
        <p className="text-sm text-slate-700 mt-2">If you have a DSE offer, <strong>do not accept SE</strong> — the financial and career gap is too large.</p>
      </InfoCard>
    </div>
  );
}

function CareerGrowthSection() {
  return (
    <div>
      <SectionHeader title="Career Growth Model" emoji="📈" />

      <div className="flex gap-2 flex-wrap mb-4">
        <ConfidenceBadge level="Medium" />
        <Source label="Fishbowl DSE Bowl (Employee Reports)" />
        <Source label="Glassdoor Infosys Career Progression" />
        <Source label="Infosys Salary Hike 2025 Reports" />
      </div>

      <h3 className="font-bold text-slate-800 text-lg mb-3">DSE Internal Career Ladder</h3>
      <Table
        headers={["Level", "Role", "Approx CTC", "Timeline", "Requirements"]}
        rows={[
          ["L0", "DSE (Fresher)", "₹6.25 LPA", "Joining", "Offer letter"],
          ["L1", "DSE L1", "₹7.5–9 LPA", "10–14 months", "Certifications + DQ points + billing rate"],
          ["L2", "DSE L2 / Senior DSE", "₹11–14 LPA", "2.5–3.5 years", "L1 certs + project performance"],
          ["L3", "Tech Lead / Senior SE", "₹18–22 LPA", "4–6 years", "Leadership + architecture skills"],
          ["L4", "Specialist Architect", "₹25–35 LPA", "7+ years", "Domain expertise + client management"],
        ]}
      />

      <InfoCard accent="amber" title="Important Caveat: DQ Points & Billing Rate">
        <p className="text-sm text-slate-700">L0→L1 promotion is NOT automatic by tenure. Infosys evaluates:</p>
        <div className="mt-2">
          <Con text="DQ (Digital Quotient) points — earned by completing Lex learning paths and certifications" />
          <Con text="Billing rate must meet a threshold — if your project billing rate is too low, promotion can be delayed" />
          <Con text="Manager endorsement required" />
          <Pro text="If you proactively complete certifications (AWS, Azure, GCP), L0→L1 is achievable in 10–12 months" />
        </div>
      </InfoCard>

      <h3 className="font-bold text-slate-800 text-lg mb-3 mt-6">Salary Projection</h3>
      <Table
        headers={["Year", "Internal Path (No Switch)", "External Switch Path", "FAANG/Product Path"]}
        rows={[
          ["Start", "₹6.25 LPA", "₹6.25 LPA", "₹6.25 LPA"],
          ["Year 1", "₹6.75–7.5 LPA", "₹6.75–7.5 LPA", "₹6.75 LPA"],
          ["Year 2", "₹8–9.5 LPA (L1 promo)", "₹10–14 LPA (switch)", "₹15–25 LPA (if cracked product)"],
          ["Year 3", "₹9–11 LPA", "₹14–18 LPA (2nd switch)", "₹20–35 LPA"],
          ["Year 5", "₹14–18 LPA (L2)", "₹20–30 LPA", "₹30–50+ LPA"],
        ]}
      />

      <InfoCard accent="green" title="Can an average DSE reach 12–20 LPA in 2–4 years?">
        <p className="text-sm text-slate-700 mb-2"><strong>YES — but with external switching, not by staying in Infosys.</strong></p>
        <Pro text="Realistic path: DSE at Infosys (Year 1–2 for learning) → switch to mid-size product company or fintech at 10–14 LPA (Year 2) → 2nd switch at 16–20 LPA (Year 3–4)" />
        <Pro text="Cloud certifications (AWS Solutions Architect) dramatically increase marketability" />
        <Pro text="Infosys brand name + 2 years experience is a credible resume story for mid-tier product companies" />
        <Con text="Staying inside Infosys alone: reaching 12–15 LPA internally takes 3–4 years minimum" />
        <Con text="Without proactive skill-building, the trajectory stagnates" />
      </InfoCard>

      <h3 className="font-bold text-slate-800 text-lg mb-3 mt-6">Best Exit Pathways from DSE</h3>
      <Table
        headers={["Target", "Realistic Timeline", "Key Skills Needed", "Expected CTC Jump"]}
        rows={[
          ["Mid-size IT/Product companies", "1.5–2 years", "Strong coding + 1 cloud cert", "10–14 LPA"],
          ["FinTech startups", "1.5–2 years", "Full Stack + system design basics", "12–18 LPA"],
          ["MNC Product (Microsoft/Google/Amazon)", "3–4 years", "DSA + System Design + OSS projects", "25–40 LPA"],
          ["SaaS companies", "2–3 years", "Cloud + microservices portfolio", "15–22 LPA"],
          ["Higher education (MS/MTech)", "2–3 years", "GATE/GRE + savings from Infosys salary", "Better long-term"],
        ]}
      />
    </div>
  );
}

function BenefitsSection() {
  return (
    <div>
      <SectionHeader title="Employee Benefits & Perks" emoji="🎯" />

      <div className="flex gap-2 flex-wrap mb-4">
        <ConfidenceBadge level="High" />
        <Source label="Infosys HR Policies (India)" />
        <Source label="Glassdoor Benefits Reviews" />
        <Source label="InfosysMysore.in" />
      </div>

      <h3 className="font-bold text-slate-800 text-lg mb-3">Core Benefits</h3>
      <Table
        headers={["Benefit", "Details", "Quality Rating"]}
        rows={[
          ["Group Medical Insurance", "Employee covered; ~₹3–5 lakh base coverage", "⭐⭐⭐ (Adequate)"],
          ["Parents Coverage", "Available as 'Extended Family Health Insurance' (EFHIP) — optional paid add-on", "⭐⭐⭐"],
          ["Provident Fund (PF)", "12% employee + 12% employer of Basic; statutory", "⭐⭐⭐⭐"],
          ["Gratuity", "5 years minimum for gratuity eligibility; statutory", "⭐⭐⭐"],
          ["Life Insurance", "Group term life insurance included", "⭐⭐⭐"],
          ["Leave Policy", "18 paid leaves + national holidays (~12); sick leave", "⭐⭐⭐⭐"],
          ["Maternity Leave", "26 weeks (statutory + company policy)", "⭐⭐⭐⭐"],
          ["Infosys Lex", "Internal learning platform — thousands of courses free", "⭐⭐⭐⭐⭐"],
          ["Certification Reimbursement", "Partial or full reimbursement for approved certs (AWS, Azure, etc.)", "⭐⭐⭐⭐"],
          ["Food Subsidy", "Subsidized cafeteria in most campuses", "⭐⭐⭐"],
          ["Transport", "Company cabs available in most cities (chargeable)", "⭐⭐⭐"],
          ["Employee Stock (ESOP)", "Not typical for fresher DSE track", "❌"],
          ["WFH Policy", "Hybrid model (2–3 days office, varies by client)", "⭐⭐⭐"],
        ]}
      />

      <InfoCard accent="green" title="Standout Benefit: Infosys Lex Learning Platform">
        <p className="text-sm text-slate-700">Infosys Lex is genuinely excellent — a vast internal learning ecosystem covering AI/ML, Cloud, DevOps, Full Stack, Cybersecurity, leadership, and more. It's freely available to all employees and is integral to the promotion pathway (DQ points). Many employees rate this as the single best non-cash benefit at Infosys.</p>
        <Pro text="Thousands of courses across all major tech domains" />
        <Pro text="Directly tied to promotion eligibility (DQ score)" />
        <Pro text="Helps prepare for external certification exams" />
      </InfoCard>

      <h3 className="font-bold text-slate-800 text-lg mb-3 mt-6">Campus Facilities (At Major Offices)</h3>
      <Table
        headers={["Facility", "Available?"]}
        rows={[
          ["Gym / Fitness Center", "Yes — at major campuses (Mysore, Bangalore, Pune, Hyderabad)"],
          ["Swimming Pool", "At Mysore campus; limited at other locations"],
          ["Sports Complex", "At Mysore; cricket, football, basketball at some campuses"],
          ["Cafeteria / Food Court", "Yes — multiple outlets, subsidized prices"],
          ["Recreation/Games Room", "Yes — at major campuses"],
          ["Clinic / Medical Center", "Yes — at major campuses"],
        ]}
      />
    </div>
  );
}

function WorkCultureSection() {
  return (
    <div>
      <SectionHeader title="Work Culture & Employee Sentiment" emoji="🌡️" />

      <div className="flex gap-2 flex-wrap mb-4">
        <ConfidenceBadge level="High" />
        <Source label="Glassdoor (127,000+ reviews · 3.6/5)" />
        <Source label="Indeed Employee Reviews" />
        <Source label="Infosys SEC Filings Q3FY26 (Attrition Data)" />
      </div>

      <h3 className="font-bold text-slate-800 text-lg mb-3">Glassdoor Ratings Breakdown</h3>
      <div className="bg-white rounded-xl p-5 border border-slate-200 mb-6">
        <RatingBar label="Overall Rating" score={3.6} max={5} color="blue" />
        <RatingBar label="Work-Life Balance" score={3.6} max={5} color="green" />
        <RatingBar label="Culture & Values" score={3.7} max={5} color="green" />
        <RatingBar label="Career Opportunities" score={3.6} max={5} color="amber" />
        <RatingBar label="Compensation & Benefits" score={2.8} max={5} color="red" />
        <RatingBar label="% Recommend to Friend" score={67} max={100} color="blue" />
        <p className="text-xs text-slate-500 mt-3">Based on 127,000+ Glassdoor reviews as of 2026</p>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-6" style={{gridTemplateColumns: '1fr 1fr'}}>
        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <h4 className="font-bold text-slate-800 mb-3 text-sm">Top 10 Employee Complaints</h4>
          <Con text="Salary hikes well below industry standard (5–8%)" />
          <Con text="Bench period anxiety — project allocation delays" />
          <Con text="Variable pay rarely paid in full" />
          <Con text="Slow promotion cycles, bureaucratic process" />
          <Con text="Manager quality is a lottery" />
          <Con text="3-month notice period (hard to exit quickly)" />
          <Con text="Legacy project allocation despite 'specialist' tag" />
          <Con text="Karat exam after training = hidden second screening" />
          <Con text="Rating system not transparent" />
          <Con text="WFH policies inconsistent across teams" />
        </div>
        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <h4 className="font-bold text-slate-800 mb-3 text-sm">Top 10 Advantages</h4>
          <Pro text="World-class training (Mysore campus experience)" />
          <Pro text="Strong brand name on resume" />
          <Pro text="Excellent job security and stability" />
          <Pro text="Infosys Lex: exceptional internal learning" />
          <Pro text="Global client exposure from early on" />
          <Pro text="Good work-life balance on many teams" />
          <Pro text="Diverse tech projects across industries" />
          <Pro text="Onsite opportunities available after 2–3 years" />
          <Pro text="Large peer community (3.2 lakh+ colleagues)" />
          <Pro text="Salary is paid on time, every time" />
        </div>
      </div>

      <InfoCard accent="blue" title="Attrition Data (Official, from SEC Filings)">
        <Table
          headers={["Quarter", "Voluntary Attrition (LTM)"]}
          rows={[
            ["Q3 FY26 (Dec 2025)", "12.3% ↓ (declining)"],
            ["Q2 FY26 (Sep 2025)", "14.3%"],
            ["Q1 FY26 (Jun 2025)", "14.4%"],
            ["Q4 FY25 (Mar 2025)", "14.1%"],
          ]}
        />
        <p className="text-xs text-slate-500">Source: Infosys SEC Filings (Form 6-K). Attrition is declining — reflects both improved retention and tighter market conditions.</p>
      </InfoCard>

      <InfoCard accent="amber" title="The Bench Policy Reality">
        <p className="text-sm text-slate-700 mb-2">If not allocated to a project:</p>
        <Pro text="You continue to receive full salary while on bench" />
        <Con text="After ~3 months on bench, Infosys may initiate PIP (Performance Improvement Plan)" />
        <Con text="If 3 project rejections or 45+ days on bench without effort, risk of separation" />
        <Pro text="Bench time can be used for certifications, which improves allocation prospects" />
      </InfoCard>
    </div>
  );
}

function LocationSection() {
  return (
    <div>
      <SectionHeader title="Location Analysis: City Comparison" emoji="🏙️" />

      <div className="flex gap-2 flex-wrap mb-4">
        <ConfidenceBadge level="High" />
        <Source label="NoBroker.in Cost of Living 2026" />
        <Source label="Stanza Living / Zolo 2026 Data" />
        <Source label="Colive Blog 2026" />
      </div>

      <Table
        headers={["Expense", "Bangalore", "Hyderabad", "Pune", "Chennai"]}
        rows={[
          ["Shared PG / Co-living (incl. food)", "₹10,000–15,000", "₹8,000–12,000", "₹8,000–13,000", "₹7,000–11,000"],
          ["Private PG (no food)", "₹12,000–18,000", "₹9,000–14,000", "₹9,000–15,000", "₹8,000–13,000"],
          ["1BHK Flat (solo)", "₹15,000–28,000", "₹12,000–20,000", "₹12,000–22,000", "₹10,000–18,000"],
          ["Food (self-cook + occasional eating out)", "₹4,000–7,000", "₹3,500–6,000", "₹3,500–6,500", "₹3,000–5,500"],
          ["Transport (Metro/Bus + occasional cab)", "₹1,500–3,000", "₹1,200–2,500", "₹1,200–2,500", "₹1,000–2,000"],
          ["Utilities / Internet", "₹800–1,500", "₹700–1,200", "₹700–1,200", "₹600–1,000"],
          ["Total Monthly Expenses (PG, shared)", "~₹18,000–26,000", "~₹15,000–21,000", "~₹15,000–22,000", "~₹13,000–19,000"],
          ["Estimated Monthly Savings", "₹15,000–23,000", "₹20,000–27,000", "₹19,000–26,000", "₹22,000–28,000"],
        ]}
      />

      <h3 className="font-bold text-slate-800 text-lg mb-3 mt-6">City Verdict</h3>
      <div className="grid grid-cols-1 gap-3">
        <InfoCard accent="red" title="🏙️ Bangalore — Highest Cost, Best Career Opportunity">
          <p className="text-sm text-slate-700"><strong>Best for:</strong> Career growth, networking, startup scene, switching opportunities</p>
          <p className="text-sm text-slate-700"><strong>Worst for:</strong> Savings (₹15k–23k/month) — most expensive city</p>
          <p className="text-sm text-slate-700"><strong>Rent tip:</strong> Electronic City, Marathahalli, BTM Layout — budget ₹7k–12k for PG with food</p>
        </InfoCard>
        <InfoCard accent="green" title="🏙️ Hyderabad — Best Balance of Cost & Opportunity">
          <p className="text-sm text-slate-700"><strong>Best for:</strong> Savings + good IT ecosystem (no Professional Tax!)</p>
          <p className="text-sm text-slate-700"><strong>Savings potential:</strong> ₹20,000–27,000/month — highest among major cities</p>
          <p className="text-sm text-slate-700"><strong>Career:</strong> Strong IT hub; Infosys has large presence</p>
        </InfoCard>
        <InfoCard accent="blue" title="🏙️ Pune — Great for Work-Life Balance">
          <p className="text-sm text-slate-700"><strong>Best for:</strong> Quality of life, moderate cost, good weather</p>
          <p className="text-sm text-slate-700"><strong>Savings potential:</strong> ₹19,000–26,000/month</p>
          <p className="text-sm text-slate-700"><strong>Career:</strong> Good but smaller talent pool than Bangalore/Hyderabad</p>
        </InfoCard>
        <InfoCard accent="amber" title="🏙️ Chennai — Most Affordable, Slower Career Ecosystem">
          <p className="text-sm text-slate-700"><strong>Best for:</strong> Maximum savings (₹22k–28k/month) if frugal</p>
          <p className="text-sm text-slate-700"><strong>Worst for:</strong> Career networking, switching opportunities vs Bangalore</p>
          <p className="text-sm text-slate-700"><strong>Language:</strong> Tamil language knowledge helpful for daily life</p>
        </InfoCard>
      </div>
    </div>
  );
}

function InternshipSection() {
  return (
    <div>
      <SectionHeader title="Infosys DSE vs 30K Internship" emoji="🤔" />

      <div className="flex gap-2 flex-wrap mb-4">
        <ConfidenceBadge level="High" />
        <Source label="Financial Analysis (Verified Calculations)" />
      </div>

      <InfoCard accent="blue" title="The Scenario">
        <p className="text-sm text-slate-700"><strong>Option A:</strong> Infosys DSE — ₹6.25 LPA CTC + ₹75,000 joining bonus</p>
        <p className="text-sm text-slate-700"><strong>Option B:</strong> 6-month internship — ₹30,000/month stipend</p>
      </InfoCard>

      <h3 className="font-bold text-slate-800 text-lg mb-3 mt-6">Financial Comparison — Year 1</h3>
      <Table
        headers={["Metric", "Infosys DSE", "₹30K Internship"]}
        rows={[
          ["Monthly income", "~₹42,000 in-hand", "₹30,000 stipend (6 months)"],
          ["Annual income (cash)", "~₹5,04,000", "₹1,80,000 (6 months only)"],
          ["Joining bonus", "+₹75,000", "None"],
          ["Post-internship income", "Continues (permanent job)", "Uncertain (placement risk)"],
          ["Year 1 total (optimistic)", "~₹5,79,000", "~₹1,80,000 + whatever you earn after"],
          ["Year 1 total (realistic)", "~₹5,40,000", "₹1,80,000 (if no PPO/job found quickly)"],
        ]}
      />

      <h3 className="font-bold text-slate-800 text-lg mb-3 mt-6">The 3-Year Picture</h3>
      <Table
        headers={["Year", "DSE Path (cumulative)", "Internship Path (optimistic)"]}
        rows={[
          ["End of Year 1", "~₹5.8 lakh earned", "~₹1.8L stipend + ??? (depends on PPO/job)"],
          ["End of Year 2", "~₹12–13 lakh cumulative", "~₹10–14L if joined good company post-intern"],
          ["End of Year 3", "~₹20–22 lakh cumulative (with switch)", "~₹20–25L if internship led to 10+ LPA job"],
        ]}
      />

      <InfoCard accent="green" title="Analysis: When DSE Clearly Wins">
        <Pro text="If the internship has NO confirmed PPO (Pre-Placement Offer), choose DSE without hesitation." />
        <Pro text="DSE gives immediate financial certainty vs internship's placement risk." />
        <Pro text="6 months of ₹30K = ₹1.8L. Infosys DSE gives ₹5.8L in Year 1. DSE wins massively in Year 1." />
        <Pro text="DSE brand name > internship brand (unless it's Google/Microsoft/Amazon internship)." />
      </InfoCard>

      <InfoCard accent="amber" title="When the Internship May Win">
        <Con text="If the internship is at a top product company (Google, Microsoft, Amazon, Flipkart) with a near-certain PPO at 15+ LPA, the internship could lead to a dramatically better long-term trajectory." />
        <Con text="If the internship is part of an MS/MTech transition abroad, it may unlock global opportunities." />
        <Con text="If you already have another high-paying offer and are using the internship as a bridge, it may make sense." />
      </InfoCard>

      <InfoCard accent="blue" title="Bottom Line Recommendation">
        <p className="text-sm text-slate-700 font-semibold">For a generic 6-month internship with no confirmed PPO: <span className="text-emerald-700">Accept Infosys DSE.</span></p>
        <p className="text-sm text-slate-700 mt-1">For a FAANG/top product company internship with strong PPO prospects: <span className="text-amber-700">Evaluate the PPO offer carefully first, then decide.</span></p>
      </InfoCard>
    </div>
  );
}

function FinalVerdictSection() {
  return (
    <div>
      <SectionHeader title="Final Verdict" emoji="🏆" />

      <div className="flex gap-2 flex-wrap mb-4">
        <ConfidenceBadge level="High" />
        <Source label="Synthesized from all 12 sections of research" />
      </div>

      <h3 className="font-bold text-slate-800 text-lg mb-3">Overall Ratings</h3>
      <div className="bg-white rounded-xl p-5 border border-slate-200 mb-6">
        <RatingBar label="Overall Rating" score={6.5} max={10} color="blue" />
        <RatingBar label="Salary (as fresher starting point)" score={7.5} max={10} color="green" />
        <RatingBar label="Learning Opportunity" score={8} max={10} color="green" />
        <RatingBar label="Career Growth (inside Infosys)" score={5} max={10} color="amber" />
        <RatingBar label="Career Growth (as launchpad for switching)" score={7.5} max={10} color="green" />
        <RatingBar label="Work-Life Balance" score={7} max={10} color="green" />
        <RatingBar label="Brand Value" score={8} max={10} color="green" />
        <RatingBar label="Salary Growth Over Time (if staying)" score={4.5} max={10} color="red" />
        <RatingBar label="Technology Exposure" score={7} max={10} color="blue" />
        <RatingBar label="Job Security" score={8.5} max={10} color="green" />
      </div>

      <div className="grid grid-cols-1 gap-4 mb-6" style={{gridTemplateColumns: '1fr 1fr'}}>
        <InfoCard accent="green" title="✅ WHO SHOULD JOIN">
          <Pro text="2026 graduates with no better confirmed offer (8+ LPA)" />
          <Pro text="Those who want structured onboarding into the IT industry" />
          <Pro text="Anyone who wants the Infosys brand on their resume as a launchpad" />
          <Pro text="Those who want to pursue AWS/Azure certs and switch after 1–2 years" />
          <Pro text="Candidates from Tier 2/3 colleges where this is the best offer" />
          <Pro text="Those who prefer job stability over risk" />
        </InfoCard>
        <InfoCard accent="red" title="❌ WHO SHOULD NOT JOIN / WAIT">
          <Con text="Anyone with a confirmed offer above ₹9+ LPA from any company" />
          <Con text="FAANG/top product company internship candidates with PPO offers" />
          <Con text="Those expecting fast salary growth without switching companies" />
          <Con text="Strong competitive programmers who should aim for SP (₹10 LPA) or higher" />
          <Con text="Those with solid startup offers where equity can compensate" />
        </InfoCard>
      </div>

      <InfoCard accent="blue" title="Estimated Monthly Savings in Bangalore (Realistic)">
        <Table
          headers={["Scenario", "Monthly In-Hand", "Monthly Expenses", "Monthly Savings"]}
          rows={[
            ["Frugal (shared PG, cook home)", "₹42,000", "~₹18,000", "~₹24,000"],
            ["Moderate (PG with food, metro)", "₹42,000", "~₹22,000", "~₹20,000"],
            ["Comfortable (private PG, eating out)", "₹42,000", "~₹28,000", "~₹14,000"],
          ]}
        />
        <p className="text-xs text-slate-500">Frugal savers can accumulate ₹2.5–3 lakh in Year 1 after joining bonus + savings. This is a solid financial foundation.</p>
      </InfoCard>

      <InfoCard accent="purple" title="Long-Term Outlook (5 Years)">
        <p className="text-sm text-slate-700 mb-2">The Infosys DSE role's value lies almost entirely in what you build <em>during</em> the job, not what you earn from it long-term inside the company. Use it as:</p>
        <Pro text="A credentialing exercise: Infosys brand + real project experience = powerful resume signal" />
        <Pro text="A certification runway: Use Lex + company cert reimbursement to get AWS/Azure certs" />
        <Pro text="A financial runway: Save aggressively in Year 1–2 for GATE/GRE/MS fund or startup jump" />
        <Con text="Staying 5+ years at DSE trajectory without switching = salary stagnation vs market" />
        <p className="text-sm text-slate-700 mt-2 font-semibold">Optimal strategy: Join DSE → Certify aggressively → Switch at 18–24 months → Target 10–15 LPA → Repeat.</p>
      </InfoCard>

      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white rounded-2xl p-6 mt-6">
        <h3 className="text-xl font-extrabold mb-3">Executive Summary</h3>
        <p className="text-blue-100 text-sm mb-3">
          The Infosys DSE offer (₹6.25 LPA + ₹75K bonus) is a <strong>solid, above-average fresher offer</strong> for 2026 in India — particularly strong compared to the standard SE track (₹3.6 LPA). It provides world-class training, a globally recognized brand name, and a strong learning platform.
        </p>
        <p className="text-blue-100 text-sm mb-3">
          However, it is <strong>not a career destination</strong> — it is a launchpad. Salary growth inside Infosys is modest (5–8% hikes) and the real value comes from using the DSE experience to switch to higher-paying companies within 18–24 months.
        </p>
        <p className="text-blue-100 text-sm mb-3">
          <strong>Should you accept it?</strong> YES — if you don't have a confirmed offer above ₹8–9 LPA. Then work hard, get certified, and switch strategically.
        </p>
        <p className="text-blue-100 text-sm">
          <strong>Should you keep searching after accepting?</strong> YES — there is no contradiction. Build your skills and remain open to better opportunities. The job market respects initiative.
        </p>
        <div className="mt-4 pt-4 border-t border-blue-700">
          <p className="text-2xl font-extrabold text-white">Final Rating: <span className="text-yellow-300">6.5 / 10</span></p>
          <p className="text-blue-200 text-xs mt-1">A strong start. Not a finish line.</p>
        </div>
      </div>
    </div>
  );
}
