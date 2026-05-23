import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';

// Define the absolute output directory
const outputDir = '/Users/abhinavrai/Developer/abhinavRai23.github.io/public/images/projects';

// Helper to write SVG, convert to JPEG with sips, and delete SVG
function generateMockup(filename, svgContent) {
    const tempSvgPath = path.join(outputDir, `${filename}.svg`);
    const finalJpgPath = path.join(outputDir, `${filename}.jpg`);
    
    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Write SVG file
    fs.writeFileSync(tempSvgPath, svgContent, 'utf8');
    console.log(`Saved temporary SVG to: ${tempSvgPath}`);
    
    try {
        // Convert to JPEG with sips
        // We set format jpeg, formatOptions 85 (high quality), and height/width of 800x400
        execSync(`sips -s format jpeg -s formatOptions 85 --resampleHeightWidth 400 800 "${tempSvgPath}" --out "${finalJpgPath}"`);
        console.log(`Successfully compiled JPEG to: ${finalJpgPath}`);
    } catch (error) {
        console.error(`Error converting ${filename} to JPEG:`, error.message);
    } finally {
        // Clean up SVG
        if (fs.existsSync(tempSvgPath)) {
            fs.unlinkSync(tempSvgPath);
        }
    }
}

// -------------------------------------------------------------
// 1. CAMPAIGN CHECKER MOCKUP (800 x 400)
// -------------------------------------------------------------
const campaignCheckerSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="800" height="400">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc" />
      <stop offset="100%" stop-color="#f1f5f9" />
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="100%" stop-color="#fafafa" />
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="115%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#0f172a" flood-opacity="0.06" />
    </filter>
    <filter id="glowGreen" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <style>
    text { font-family: 'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    .font-title { font-weight: 800; fill: #0f172a; }
    .font-bold { font-weight: 700; fill: #1e293b; }
    .font-semibold { font-weight: 600; fill: #334155; }
    .font-medium { font-weight: 500; fill: #475569; }
    .font-regular { font-weight: 400; fill: #64748b; }
    .font-light { font-weight: 300; fill: #94a3b8; }
  </style>

  <!-- Background -->
  <rect width="800" height="400" fill="url(#bgGrad)" />

  <!-- Mock Browser Bar -->
  <rect width="800" height="30" fill="#e2e8f0" />
  <circle cx="15" cy="15" r="5" fill="#ef4444" />
  <circle cx="30" cy="15" r="5" fill="#f59e0b" />
  <circle cx="45" cy="15" r="5" fill="#10b981" />
  <rect x="70" y="5" width="660" height="20" rx="6" fill="#f1f5f9" />
  <text x="350" y="19" class="font-regular" font-size="11" fill="#64748b">http://localhost:3000/campaign-precheck</text>

  <!-- Dashboard Content Wrapper (starts y=30) -->
  
  <!-- Header Bar -->
  <rect x="0" y="30" width="800" height="55" fill="#ffffff" border-bottom="1px solid #e2e8f0" />
  <path d="M25 47.5 L30 52.5 L40 42.5" fill="none" stroke="#bd5d38" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  <circle cx="32.5" cy="47.5" r="12" fill="none" stroke="#bd5d38" stroke-width="2" />
  <text x="55" y="52" class="font-title" font-size="16">EMAIL CAMPAIGN PRE-CHECK</text>
  
  <!-- Badge: Ready to Send -->
  <rect x="520" y="42" width="130" height="24" rx="12" fill="#d1fae5" />
  <circle cx="535" cy="54" r="4" fill="#10b981" />
  <text x="546" y="58" class="font-bold" font-size="10" fill="#065f46">READY FOR SENDING</text>

  <!-- Badge: 98% Score -->
  <rect x="660" y="42" width="115" height="24" rx="12" fill="#dbeafe" />
  <text x="672" y="58" class="font-bold" font-size="10" fill="#1e40af">QUALITY SCORE: 98%</text>

  <line x1="0" y1="85" x2="800" y2="85" stroke="#e2e8f0" stroke-width="1" />

  <!-- MAIN WIDGET CARDS GRID -->
  
  <!-- Card 1: Spell Check & Grammar -->
  <rect x="25" y="105" width="235" height="130" rx="16" fill="url(#cardGrad)" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="1" />
  <rect x="40" y="120" width="32" height="32" rx="8" fill="#fef3c7" />
  <!-- SpellCheck ABC Icon -->
  <text x="46" y="141" class="font-bold" font-size="14" fill="#d97706">Abc</text>
  <text x="82" y="134" class="font-bold" font-size="13">Grammar &amp; Spell Check</text>
  <text x="82" y="148" class="font-regular" font-size="11" fill="#d97706">2 Warnings Detected</text>
  
  <!-- Issues details -->
  <text x="40" y="180" class="font-semibold" font-size="11">Typo: "mispelled"</text>
  <text x="160" y="180" class="font-medium" font-size="11" fill="#10b981">➔ "misspelled"</text>
  <text x="40" y="200" class="font-semibold" font-size="11">Spacing: "rebranding.The"</text>
  <text x="160" y="200" class="font-medium" font-size="11" fill="#10b981">➔ "rebranding. The"</text>

  <!-- Card 2: Link Scanner -->
  <rect x="282" y="105" width="235" height="130" rx="16" fill="url(#cardGrad)" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="1" />
  <rect x="297" y="120" width="32" height="32" rx="8" fill="#d1fae5" />
  <!-- Link Icon -->
  <path d="M307 141 L319 129 M310 132 L313 135 M313 135 A3 3 0 0 0 317 131 M312 138 A3 3 0 0 0 316 134" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" />
  <text x="339" y="134" class="font-bold" font-size="13">Link Scanner Status</text>
  <text x="339" y="148" class="font-bold" font-size="11" fill="#059669">Status: 100% Secure</text>
  
  <text x="297" y="180" class="font-regular" font-size="11">Checked Links:</text>
  <text x="430" y="180" class="font-bold" font-size="11">14 URL Links</text>
  <text x="297" y="200" class="font-regular" font-size="11">Broken Links found:</text>
  <text x="430" y="200" class="font-bold" font-size="11" fill="#10b981">0 Links</text>
  <rect x="297" y="215" width="205" height="6" rx="3" fill="#e2e8f0" />
  <rect x="297" y="215" width="205" height="6" rx="3" fill="#10b981" />

  <!-- Card 3: Image Accessibility -->
  <rect x="540" y="105" width="235" height="130" rx="16" fill="url(#cardGrad)" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="1" />
  <rect x="555" y="120" width="32" height="32" rx="8" fill="#fee2e2" />
  <!-- Accessibility/Eye Icon -->
  <circle cx="571" cy="136" r="4" fill="none" stroke="#dc2626" stroke-width="2" />
  <path d="M561 136 Q571 126 581 136 Q571 146 561 136 Z" fill="none" stroke="#dc2626" stroke-width="2" />
  <text x="597" y="134" class="font-bold" font-size="13">Image Accessibility</text>
  <text x="597" y="148" class="font-regular" font-size="11" fill="#dc2626">Alt-Text Validation</text>

  <text x="555" y="180" class="font-regular" font-size="11">Total Images Evaluated:</text>
  <text x="715" y="180" class="font-bold" font-size="11">15 Images</text>
  <text x="555" y="200" class="font-regular" font-size="11">Missing Alt-Tags:</text>
  <text x="715" y="200" class="font-bold" font-size="11" fill="#dc2626">3 Alt-Tags</text>

  <!-- Bottom Panel: Email Credits & Campaign Summary -->
  <rect x="25" y="255" width="750" height="120" rx="20" fill="url(#cardGrad)" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="1" />
  
  <text x="45" y="285" class="font-bold" font-size="14">CAMPAIGN METRICS &amp; STATUS</text>
  
  <!-- Progress meter for Email credits -->
  <text x="45" y="315" class="font-semibold" font-size="12">Remaining Email Credits:</text>
  <text x="210" y="315" class="font-bold" font-size="12" fill="#bd5d38">6,842 / 10,000 Credits</text>
  <rect x="45" y="325" width="300" height="12" rx="6" fill="#e2e8f0" />
  <rect x="45" y="325" width="205" height="12" rx="6" fill="#bd5d38" />
  <text x="355" y="335" class="font-semibold" font-size="11" fill="#bd5d38">68%</text>

  <line x1="420" y1="265" x2="420" y2="365" stroke="#e2e8f0" stroke-width="1" />

  <!-- Campaign target preview -->
  <text x="440" y="285" class="font-semibold" font-size="12">Target Campaign: "Welcome Series - Email 2 (Q4 Promo)"</text>
  <text x="440" y="305" class="font-regular" font-size="11">Subject: "Boost Your Business with Sendinblue / Brevo Solutions!"</text>
  <text x="440" y="325" class="font-regular" font-size="11">Personalization Check: <tspan class="font-bold" fill="#10b981">Dynamic Fields Validated (First Name, Company)</tspan></text>
  <text x="440" y="345" class="font-regular" font-size="11">Credits Required: <tspan class="font-bold">2,450</tspan> | Available Credits after sending: <tspan class="font-bold" fill="#10b981">4,392</tspan></text>

</svg>
`;

// -------------------------------------------------------------
// 2. CRM DASHBOARD MOCKUP (800 x 400)
// -------------------------------------------------------------
const crmSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="800" height="400">
  <defs>
    <linearGradient id="bgGradCrm" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc" />
      <stop offset="100%" stop-color="#f1f5f9" />
    </linearGradient>
    <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#bd5d38" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#bd5d38" stop-opacity="0.0" />
    </linearGradient>
    <filter id="shadowCrm" x="-5%" y="-5%" width="110%" height="115%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#0f172a" flood-opacity="0.05" />
    </filter>
  </defs>

  <style>
    text { font-family: 'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }
    .font-title { font-weight: 800; fill: #0f172a; }
    .font-bold { font-weight: 700; fill: #1e293b; }
    .font-semibold { font-weight: 600; fill: #334155; }
    .font-medium { font-weight: 500; fill: #475569; }
    .font-regular { font-weight: 400; fill: #64748b; }
  </style>

  <!-- Background -->
  <rect width="800" height="400" fill="url(#bgGradCrm)" />

  <!-- Mock Browser Bar -->
  <rect width="800" height="30" fill="#cbd5e1" />
  <circle cx="15" cy="15" r="5" fill="#ef4444" />
  <circle cx="30" cy="15" r="5" fill="#f59e0b" />
  <circle cx="45" cy="15" r="5" fill="#10b981" />
  <rect x="70" y="5" width="660" height="20" rx="6" fill="#f8fafc" />
  <text x="350" y="19" class="font-regular" font-size="11" fill="#64748b">https://crm.afinoz.com/dashboard</text>

  <!-- Header Bar -->
  <rect x="0" y="30" width="800" height="50" fill="#ffffff" />
  <!-- Logo text lowercase "afinoz" -->
  <text x="25" y="62" font-family="'Outfit'" font-weight="900" font-size="20" fill="#2563eb">afinoz</text>
  <line x1="95" y1="42" x2="95" y2="68" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="110" y="60" class="font-title" font-size="14">CRM CONSOLE</text>

  <!-- User profile -->
  <rect x="680" y="40" width="95" height="30" rx="15" fill="#f1f5f9" />
  <circle cx="695" cy="55" r="10" fill="#bd5d38" />
  <text x="691" y="58" font-size="9" font-weight="bold" fill="#ffffff">AR</text>
  <text x="712" y="59" class="font-bold" font-size="10">Abhinav R.</text>

  <line x1="0" y1="80" x2="800" y2="80" stroke="#e2e8f0" stroke-width="1" />

  <!-- Navigation Sidebar (starts x=0, y=80, width=60) -->
  <rect x="0" y="80" width="60" height="320" fill="#ffffff" />
  <!-- Sidebar icons -->
  <!-- Dashboard Icon (Active) -->
  <rect x="10" y="95" width="40" height="40" rx="10" fill="#eff6ff" />
  <rect x="22" y="107" width="7" height="7" rx="1" fill="#2563eb" />
  <rect x="31" y="107" width="7" height="7" rx="1" fill="#2563eb" />
  <rect x="22" y="116" width="7" height="7" rx="1" fill="#2563eb" />
  <rect x="31" y="116" width="7" height="7" rx="1" fill="#bd5d38" />
  
  <!-- Contacts Icon -->
  <circle cx="30" cy="165" r="5" fill="none" stroke="#64748b" stroke-width="2" />
  <path d="M22 178 A8 8 0 0 1 38 178 Z" fill="none" stroke="#64748b" stroke-width="2" />

  <!-- Deals Icon -->
  <path d="M23 212 L30 205 L37 212 L30 219 Z" fill="none" stroke="#64748b" stroke-width="2" />

  <!-- Settings Icon -->
  <circle cx="30" cy="265" r="4" fill="none" stroke="#64748b" stroke-width="2" />
  <circle cx="30" cy="265" r="7" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="2 2" />

  <line x1="60" y1="80" x2="60" y2="400" stroke="#e2e8f0" stroke-width="1" />

  <!-- Main Body Content -->
  <!-- METRICS ROW -->
  
  <!-- Card 1: Total Revenue -->
  <rect x="85" y="100" width="215" height="75" rx="16" fill="#ffffff" filter="url(#shadowCrm)" stroke="#e2e8f0" stroke-width="1" />
  <text x="105" y="123" class="font-regular" font-size="11" fill="#64748b">TOTAL DISBURSED LOANS</text>
  <text x="105" y="152" class="font-title" font-size="22">₹14,25,000</text>
  <!-- Sparkline -->
  <path d="M220 150 Q230 135 240 145 T260 130 T280 138" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" />
  <text x="245" y="123" class="font-bold" font-size="10" fill="#10b981">+12.4%</text>

  <!-- Card 2: New Leads -->
  <rect x="315" y="100" width="215" height="75" rx="16" fill="#ffffff" filter="url(#shadowCrm)" stroke="#e2e8f0" stroke-width="1" />
  <text x="135" y="123" class="font-regular" font-size="11" fill="#64748b" transform="translate(200, 0)">ACTIVE APPLICATIONS</text>
  <text x="135" y="152" class="font-title" font-size="22" transform="translate(200, 0)">1,245</text>
  <text x="275" y="123" class="font-bold" font-size="10" fill="#10b981" transform="translate(200, 0)">+8.2%</text>
  <!-- Sparkline -->
  <path d="M220 150 Q230 142 240 148 T260 136 T280 140" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" transform="translate(230, 0)" />

  <!-- Card 3: Lead conversion -->
  <rect x="545" y="100" width="230" height="75" rx="16" fill="#ffffff" filter="url(#shadowCrm)" stroke="#e2e8f0" stroke-width="1" />
  <text x="565" y="123" class="font-regular" font-size="11" fill="#64748b">CONVERSION RATE</text>
  <text x="565" y="152" class="font-title" font-size="22">18.35%</text>
  <text x="705" y="123" class="font-bold" font-size="10" fill="#ef4444">-0.8%</text>
  <!-- Sparkline -->
  <path d="M220 150 Q230 148 240 142 T260 152 T280 149" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" transform="translate(460, 0)" />

  <!-- CHARTS SECTION -->
  
  <!-- Card 4: Revenue Growth Line Chart -->
  <rect x="85" y="195" width="445" height="180" rx="20" fill="#ffffff" filter="url(#shadowCrm)" stroke="#e2e8f0" stroke-width="1" />
  <text x="105" y="222" class="font-bold" font-size="13">Application Flow Analytics (Monthly)</text>
  <text x="445" y="222" class="font-regular" font-size="10" fill="#64748b">Year: 2018</text>
  
  <!-- Y Axis Labels -->
  <text x="105" y="260" class="font-light" font-size="9" fill="#94a3b8">300k</text>
  <text x="105" y="300" class="font-light" font-size="9" fill="#94a3b8">150k</text>
  <text x="105" y="340" class="font-light" font-size="9" fill="#94a3b8">0k</text>
  
  <!-- Chart grid lines -->
  <line x1="135" y1="256" x2="505" y2="256" stroke="#f1f5f9" stroke-width="1" />
  <line x1="135" y1="296" x2="505" y2="296" stroke="#f1f5f9" stroke-width="1" />
  <line x1="135" y1="336" x2="505" y2="336" stroke="#f1f5f9" stroke-width="1" />
  
  <!-- Chart area path -->
  <path d="M135 320 Q200 270 270 285 T400 250 T505 240 L505 336 L135 336 Z" fill="url(#chartGrad)" />
  <!-- Chart stroke -->
  <path d="M135 320 Q200 270 270 285 T400 250 T505 240" fill="none" stroke="#bd5d38" stroke-width="3" stroke-linecap="round" />
  <circle cx="270" cy="285" r="4" fill="#bd5d38" stroke="#ffffff" stroke-width="2" />
  <circle cx="400" cy="250" r="4" fill="#bd5d38" stroke="#ffffff" stroke-width="2" />
  <circle cx="505" cy="240" r="4" fill="#bd5d38" stroke="#ffffff" stroke-width="2" />

  <!-- X Axis Labels -->
  <text x="130" y="356" class="font-medium" font-size="9" fill="#94a3b8">Apr</text>
  <text x="210" y="356" class="font-medium" font-size="9" fill="#94a3b8">May</text>
  <text x="290" y="356" class="font-medium" font-size="9" fill="#94a3b8">Jun</text>
  <text x="370" y="356" class="font-medium" font-size="9" fill="#94a3b8">Jul</text>
  <text x="450" y="356" class="font-medium" font-size="9" fill="#94a3b8">Aug</text>
  <text x="495" y="356" class="font-medium" font-size="9" fill="#94a3b8">Sept</text>

  <!-- Card 5: Pipeline Funnel -->
  <rect x="545" y="195" width="230" height="180" rx="20" fill="#ffffff" filter="url(#shadowCrm)" stroke="#e2e8f0" stroke-width="1" />
  <text x="565" y="222" class="font-bold" font-size="13">Conversion Funnel</text>
  
  <!-- Funnel levels -->
  <!-- 1. Leads -->
  <polygon points="575,240 745,240 735,260 585,260" fill="#3b82f6" opacity="0.9" />
  <text x="660" y="253" class="font-bold" font-size="9" fill="#ffffff" text-anchor="middle">Leads (100%)</text>
  <!-- 2. Screened -->
  <polygon points="585,264 735,264 725,284 595,284" fill="#10b981" opacity="0.9" />
  <text x="660" y="277" class="font-bold" font-size="9" fill="#ffffff" text-anchor="middle">Verification (75%)</text>
  <!-- 3. Approved -->
  <polygon points="595,288 725,288 715,308 605,308" fill="#f59e0b" opacity="0.9" />
  <text x="660" y="301" class="font-bold" font-size="9" fill="#ffffff" text-anchor="middle">Approval (45%)</text>
  <!-- 4. Disbursed -->
  <polygon points="605,312 715,312 700,332 620,332" fill="#bd5d38" opacity="0.9" />
  <text x="660" y="325" class="font-bold" font-size="9" fill="#ffffff" text-anchor="middle">Disbursed (18%)</text>

  <!-- Pipeline conversions numbers -->
  <text x="575" y="355" class="font-regular" font-size="10">Leads: <tspan class="font-bold" fill="#3b82f6">2,450</tspan></text>
  <text x="670" y="355" class="font-regular" font-size="10">Disbursed: <tspan class="font-bold" fill="#bd5d38">450</tspan></text>

</svg>
`;

// -------------------------------------------------------------
// 3. CMS EDITOR MOCKUP (800 x 400)
// -------------------------------------------------------------
const cmsSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="800" height="400">
  <defs>
    <linearGradient id="bgGradCms" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc" />
      <stop offset="100%" stop-color="#f1f5f9" />
    </linearGradient>
    <filter id="shadowCms" x="-5%" y="-5%" width="110%" height="115%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f172a" flood-opacity="0.05" />
    </filter>
  </defs>

  <style>
    text { font-family: 'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }
    .font-title { font-weight: 800; fill: #0f172a; }
    .font-bold { font-weight: 700; fill: #1e293b; }
    .font-semibold { font-weight: 600; fill: #334155; }
    .font-medium { font-weight: 500; fill: #475569; }
    .font-regular { font-weight: 400; fill: #64748b; }
  </style>

  <!-- Background -->
  <rect width="800" height="400" fill="url(#bgGradCms)" />

  <!-- Mock Browser Bar -->
  <rect width="800" height="30" fill="#cbd5e1" />
  <circle cx="15" cy="15" r="5" fill="#ef4444" />
  <circle cx="30" cy="15" r="5" fill="#f59e0b" />
  <circle cx="45" cy="15" r="5" fill="#10b981" />
  <rect x="70" y="5" width="660" height="20" rx="6" fill="#f8fafc" />
  <text x="350" y="19" class="font-regular" font-size="11" fill="#64748b">https://cms.afinoz.com/editor/edit-post</text>

  <!-- Header Bar -->
  <rect x="0" y="30" width="800" height="45" fill="#ffffff" />
  <!-- Logo text lowercase "afinoz" -->
  <text x="25" y="59" font-family="'Outfit'" font-weight="900" font-size="20" fill="#2563eb">afinoz</text>
  <line x1="95" y1="40" x2="95" y2="65" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="110" y="57" class="font-title" font-size="13">CMS CONTENT WRITER</text>
  
  <!-- Right actions -->
  <rect x="610" y="38" width="75" height="28" rx="8" fill="#e2e8f0" />
  <text x="625" y="55" class="font-bold" font-size="11" fill="#334155">Save Draft</text>
  <rect x="695" y="38" width="80" height="28" rx="8" fill="#bd5d38" />
  <text x="715" y="55" class="font-bold" font-size="11" fill="#ffffff">Publish UI</text>

  <line x1="0" y1="75" x2="800" y2="75" stroke="#e2e8f0" stroke-width="1" />

  <!-- Editor Writing Area Panel -->
  <rect x="20" y="90" width="555" height="290" rx="16" fill="#ffffff" filter="url(#shadowCms)" stroke="#e2e8f0" stroke-width="1" />
  
  <!-- Editor Format Toolbar -->
  <rect x="20" y="90" width="555" height="40" rx="16" fill="#f8fafc" />
  <line x1="20" y1="130" x2="575" y2="130" stroke="#e2e8f0" stroke-width="1" />
  
  <!-- Formatting buttons indicators -->
  <rect x="35" y="98" width="24" height="24" rx="4" fill="#cbd5e1" />
  <text x="43" y="115" class="font-bold" font-size="13">B</text>
  <text x="73" y="115" font-style="italic" class="font-semibold" font-size="13">I</text>
  <text x="98" y="115" font-decoration="underline" class="font-regular" font-size="13">U</text>
  
  <line x1="125" y1="98" x2="125" y2="122" stroke="#e2e8f0" stroke-width="1" />

  <text x="140" y="115" class="font-semibold" font-size="11">H1</text>
  <text x="170" y="115" class="font-semibold" font-size="11">H2</text>
  <text x="200" y="115" class="font-regular" font-size="11">Paragraph</text>
  
  <line x1="265" y1="98" x2="265" y2="122" stroke="#e2e8f0" stroke-width="1" />

  <!-- Link icon representation -->
  <path d="M280 115 L292 103" fill="none" stroke="#475569" stroke-width="2" />
  <!-- Image icon representation -->
  <rect x="310" y="101" width="18" height="14" rx="2" fill="none" stroke="#475569" stroke-width="2" />
  <circle cx="315" cy="106" r="1.5" fill="#475569" />

  <!-- Editor Text Content -->
  <text x="45" y="165" class="font-title" font-size="18">Navigating the New Marketing Landscape</text>
  <text x="45" y="180" class="font-light" font-size="9" fill="#94a3b8">Written by Abhinav | Oct 26, 2023</text>
  
  <text x="45" y="210" class="font-regular" font-size="11" fill="#334155">Content is king, but the digital landscape is rapidly shifting. In today's saturated online</text>
  <text x="45" y="228" class="font-regular" font-size="11" fill="#334155">financial market, creators and web publishers must embrace agility, clean layouts, and authenticity.</text>
  
  <text x="45" y="255" class="font-bold" font-size="13">Maximizing SEO Visibility on Personal Loans</text>
  <text x="45" y="275" class="font-regular" font-size="11" fill="#334155">We implemented clean JSON-LD dynamic schema templates across all bank partner pages.</text>
  <text x="45" y="293" class="font-regular" font-size="11" fill="#334155">This optimizations increased page indexing performance by 300% and reduced page load times</text>
  <text x="45" y="311" class="font-regular" font-size="11" fill="#334155">from 9 seconds to 0.8 seconds.</text>

  <!-- Image placeholder inside text editor -->
  <rect x="45" y="330" width="505" height="35" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="3 3" />
  <text x="250" y="352" class="font-regular" font-size="10" fill="#94a3b8">📷 Insert Image Block (afinoz-loan-infographic.jpg)</text>

  <!-- CMS Publishing Sidebar (starts x=590, y=90, width=190) -->
  <rect x="590" y="90" width="190" height="290" rx="16" fill="#ffffff" filter="url(#shadowCms)" stroke="#e2e8f0" stroke-width="1" />
  <text x="610" y="120" class="font-bold" font-size="12">Publishing Status</text>
  
  <text x="610" y="148" class="font-regular" font-size="10">STATUS:</text>
  <rect x="670" y="137" width="55" height="16" rx="8" fill="#fef3c7" />
  <text x="680" y="149" class="font-bold" font-size="9" fill="#d97706">DRAFT</text>

  <text x="610" y="178" class="font-regular" font-size="10">VERSION:</text>
  <text x="670" y="178" class="font-bold" font-size="10">v1.3 (Unsaved)</text>

  <line x1="600" y1="198" x2="770" y2="198" stroke="#f1f5f9" stroke-width="1" />

  <text x="610" y="222" class="font-bold" font-size="12">SEO Tagging</text>
  
  <rect x="610" y="238" width="60" height="20" rx="6" fill="#eff6ff" />
  <text x="620" y="252" class="font-semibold" font-size="9" fill="#2563eb">Loans</text>

  <rect x="675" y="238" width="65" height="20" rx="6" fill="#eff6ff" />
  <text x="685" y="252" class="font-semibold" font-size="9" fill="#2563eb">Finance</text>

  <rect x="610" y="265" width="70" height="20" rx="6" fill="#eff6ff" />
  <text x="620" y="279" class="font-semibold" font-size="9" fill="#2563eb">SEO Page</text>

  <rect x="685" y="265" width="55" height="20" rx="6" fill="#eff6ff" />
  <text x="695" y="279" class="font-semibold" font-size="9" fill="#2563eb">React</text>

  <line x1="600" y1="298" x2="770" y2="298" stroke="#f1f5f9" stroke-width="1" />

  <text x="610" y="320" class="font-bold" font-size="11">SEO Meta Description:</text>
  <rect x="610" y="330" width="150" height="40" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" />
  <text x="615" y="342" class="font-regular" font-size="9" fill="#94a3b8">Learn about personal loan</text>
  <text x="615" y="354" class="font-regular" font-size="9" fill="#94a3b8">eligibilities and rates...</text>

</svg>
`;

// -------------------------------------------------------------
// 4. E-PETITION MOCKUP (800 x 400)
// -------------------------------------------------------------
const ePetitionSvg = `
<svg xmlns="http://www.w3.org/205" viewBox="0 0 800 400" width="800" height="400">
  <defs>
    <linearGradient id="bgGradEp" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f0fdfa" />
      <stop offset="100%" stop-color="#f1f5f9" />
    </linearGradient>
    <filter id="shadowEp" x="-5%" y="-5%" width="110%" height="115%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f172a" flood-opacity="0.05" />
    </filter>
  </defs>

  <style>
    text { font-family: 'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }
    .font-title { font-weight: 800; fill: #0f172a; }
    .font-bold { font-weight: 700; fill: #1e293b; }
    .font-semibold { font-weight: 600; fill: #0d9488; }
    .font-medium { font-weight: 500; fill: #334155; }
    .font-regular { font-weight: 400; fill: #475569; }
  </style>

  <!-- Background -->
  <rect width="800" height="400" fill="url(#bgGradEp)" />

  <!-- Mock Browser Bar -->
  <rect width="800" height="30" fill="#cbd5e1" />
  <circle cx="15" cy="15" r="5" fill="#ef4444" />
  <circle cx="30" cy="15" r="5" fill="#f59e0b" />
  <circle cx="45" cy="15" r="5" fill="#10b981" />
  <rect x="70" y="5" width="660" height="20" rx="6" fill="#f8fafc" />
  <text x="350" y="19" class="font-regular" font-size="11" fill="#64748b">http://epetition-portal.local/marine-life</text>

  <!-- Header Bar -->
  <rect x="0" y="30" width="800" height="45" fill="#ffffff" />
  <circle cx="35" cy="52" r="10" fill="#0d9488" />
  <text x="31" y="56" class="font-bold" font-size="12" fill="#ffffff">P</text>
  <text x="55" y="57" class="font-title" font-size="14">CIVIC ACTION E-PETITION</text>

  <rect x="670" y="38" width="105" height="28" rx="14" fill="#0d9488" />
  <text x="688" y="56" class="font-bold" font-size="11" fill="#ffffff">Login / Join</text>

  <line x1="0" y1="75" x2="800" y2="75" stroke="#e2e8f0" stroke-width="1" />

  <!-- Left Side: Petition Details Card -->
  <rect x="25" y="95" width="475" height="285" rx="16" fill="#ffffff" filter="url(#shadowEp)" stroke="#e2e8f0" stroke-width="1" />
  
  <text x="45" y="130" class="font-bold" font-size="18" fill="#0f172a">Protect Marine Ecosystems: Ban Single-Use</text>
  <text x="45" y="152" class="font-bold" font-size="18" fill="#0f172a">Plastics in Coastal Cities</text>
  
  <text x="45" y="180" class="font-regular" font-size="11">Created by: <tspan class="font-bold" fill="#0d9488">Environmental Clean-Up Coalition</tspan></text>
  
  <!-- Petition Description -->
  <text x="45" y="210" class="font-regular" font-size="11" fill="#475569">Legislation is critically needed to prevent single-use plastic waste from dumping into</text>
  <text x="45" y="226" class="font-regular" font-size="11" fill="#475569">our coastal waters, destroying coral reefs, and endangering marine wildlife.</text>
  <text x="45" y="242" class="font-regular" font-size="11" fill="#475569">By signing this petition, we urge local authorities to mandate eco-friendly alternatives.</text>

  <!-- Signatures Progress indicator -->
  <text x="45" y="285" class="font-bold" font-size="12">SIGNATURES COLLECTED:</text>
  <text x="315" y="285" class="font-bold" font-size="12" fill="#0d9488">7,458 / 10,000 Signatures</text>
  
  <rect x="45" y="295" width="435" height="12" rx="6" fill="#e2e8f0" />
  <rect x="45" y="295" width="324" height="12" rx="6" fill="#0d9488" />
  <text x="45" y="325" class="font-semibold" font-size="11" fill="#0d9488">74% Complete — 2,542 Signatures left to reach goal!</text>

  <!-- Right Side: Sign Form Card -->
  <rect x="520" y="95" width="255" height="285" rx="16" fill="#ffffff" filter="url(#shadowEp)" stroke="#e2e8f0" stroke-width="1" />
  <text x="540" y="125" class="font-bold" font-size="14">Sign This Petition</text>
  
  <!-- Form fields -->
  <text x="540" y="152" class="font-regular" font-size="10">FIRST NAME</text>
  <rect x="540" y="160" width="215" height="24" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
  <text x="548" y="175" class="font-light" font-size="10" fill="#94a3b8">Enter first name</text>

  <text x="540" y="202" class="font-regular" font-size="10">LAST NAME</text>
  <rect x="540" y="210" width="215" height="24" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
  <text x="548" y="225" class="font-light" font-size="10" fill="#94a3b8">Enter last name</text>

  <text x="540" y="252" class="font-regular" font-size="10">EMAIL ADDRESS</text>
  <rect x="540" y="260" width="215" height="24" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
  <text x="548" y="275" class="font-light" font-size="10" fill="#94a3b8">email@example.com</text>

  <!-- Big sign button -->
  <rect x="540" y="305" width="215" height="34" rx="8" fill="#0d9488" />
  <text x="600" y="326" class="font-bold" font-size="12" fill="#ffffff">SIGN PETITION</text>
  <text x="540" y="358" class="font-light" font-size="9" fill="#94a3b8" text-anchor="middle" transform="translate(107, 0)">Your signature is visible under public logs.</text>

</svg>
`;

// Run generators
generateMockup('campaign-checker', campaignCheckerSvg);
generateMockup('crm', crmSvg);
generateMockup('cms', cmsSvg);
generateMockup('epetition', ePetitionSvg);

console.log('ALL MOCKUPS PROCESSED SUCCESSFULLY!');
