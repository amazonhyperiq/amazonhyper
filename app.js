// بيانات الشركتين
const companiesData = {
  amazon: {
    nameAr: "أمازون سوبر ماركت",
    subAr: "توفير - جودة - خيارات واسعة",
    nameEn: "AMAZON MARKET",
    subEn: "SAVE YOUR MONEY",
    logo: "amazon_logo.jpg",
    firstPartyDefault: "أمازون سوبر ماركت",
    prefix: "AMZ",
    themeClass: "amazon-theme",
    address: "العراق - بغداد - الفرع الرئيسي",
    phone: "07700000000 | 07800000000"
  },
  international: {
    nameAr: "شركة المجموعة الدولية",
    subAr: "للتجهيزات الزراعية والإنتاج الحيواني",
    nameEn: "INTERNATIONAL GROUP",
    subEn: "For Agricultural Equipment & Animal Production",
    logo: "international_logo.jpg",
    firstPartyDefault: "شركة المجموعة الدولية للتجهيزات الزراعية والإنتاج الحيواني",
    prefix: "IG",
    themeClass: "international-theme",
    address: "العراق - بغداد - الإدارة العامة",
    phone: "07711111111 | 07811111111"
  }
};

// قوالب النصوص لكل نوع وثيقة
const docTemplates = {
  supply: {
    title: "عقد تجهيز بضائع ومواد",
    secondLabel: "اسم الشركة المجهزة / المورد:",
    defaultSubject: "تجهيز بضائع وسلع لحساب الشركة",
    defaultBody: "1. التزام الطرف الثاني بتجهيز المواد والبضائع وفق الكميات والمواصفات المحددة في قسائم الطلب.\n2. يتم تسليم البضائع في مقر الطرف الأول وتخضع للفحص والمطابقة التامة.\n3. يتم تسديد المبالغ المستحقة وفق الآلية المالية المتفق عليها بين الطرفين."
  },
  partnership: {
    title: "عقد شراكة تجارية",
    secondLabel: "اسم الشريك / الشركة الشريكة:",
    defaultSubject: "اتفاقية شراكة في نشاط تجاري",
    defaultBody: "1. اتفق الطرفان على تأسيس شراكة تجارية مشتركة وفق النسبة المحددة بالاتفاق.\n2. يلتزم الطرفان بالإدارة المباشرة والشفافية المالية في كافة التصرفات والمعاملات.\n3. مدة هذا العقد سنة واحدة تجدد تلقائياً بموافقة الطرفين خطياً."
  },
  rent: {
    title: "عقد إيجار موقع / مساحة",
    secondLabel: "اسم المؤجر / المستأجر:",
    defaultSubject: "إيجار مساحة أو موقع عمل",
    defaultBody: "1. تم الاتفاق على إيجار الموقع المادي المحدد بكامل أوصافه القانونية.\n2. بدل الإيجار الشهري المتفق عليه يدفع في بداية كل شهر بدون تأخير.\n3. يلتزم الطرف الثاني بالحفاظ على سلامة العين المؤجرة وعدم إحداث أي تغييرات جوهرية إلا بموافقة خطية."
  },
  employment: {
    title: "عقد عمل فردي",
    secondLabel: "اسم الموظف / العامل:",
    defaultSubject: "تعيين وتحديد مهام وظيفية",
    defaultBody: "1. يعين الطرف الثاني بوظيفة (...) ابتداءً من تاريخ مباشرة العمل.\n2. يلتزم الطرف الثاني بساعات العمل المقررة والتعليمات الداخلية للشركة.\n3. يستحق الطرف الثاني راتباً شهرياً متفق عليه يصرف نهاية كل شهر."
  },
  reconciliation: {
    title: "كتاب مطابقة حساب مالي",
    secondLabel: "اسم الشركة / المورد المقابل:",
    defaultSubject: "مطابقة رصيد حساب حتى تاريخه",
    defaultBody: "1. نحيطكم علماً بأنه جرت مطابقة الحسابات المالية بين طرفينا حتى تاريخ هذا الكتاب.\n2. استقر الرصيد النهائي القائم بذمة أو لصالح الطرف الثاني بمبلغ وقدره (...).\n3. يرجى التوقيع والمصادقة على صحة الرصيد المذكور أعلاه لضمان التسوية."
  },
  authorization: {
    title: "كتاب تخويل خاص",
    secondLabel: "اسم الشخص المخوّل:",
    defaultSubject: "تخويل بتمثيل الشركة / مراجعة دوائر رسمية",
    defaultBody: "1. نُخول بموجب هذا الكتاب السيد (...) حامل البطاقة الشخصية رقم (...).\n2. مراجعة كافة الدوائر الرسمية وغير الرسمية واستلام المعاملات والكتب لصالح الشركة.\n3. يعتبر هذا التخويل نافذاً لمدة محددة ويُلغي أي تخويل سابق."
  },
  warning: {
    title: "إنذار / تنبيه إداري",
    secondLabel: "اسم الموظف / الجهة المنذرة:",
    defaultSubject: "إنذار إداري بسبب مخالفة التوجيهات",
    defaultBody: "1. استناداً إلى الصلاحيات الإدارية ولثبوت عدم الالتزام بالتعليمات المحددة.\n2. يوجه هذا الإنذار الرسمي بغرض تدارك الأمر وعدم تكرار المخالفة.\n3. في حال التكرار سيتم اتخاذ إجراءات قانونية وإدارية أشد."
  }
};

// عناصر الواجهة
const companySelect = document.getElementById("companySelect");
const docTypeSelect = document.getElementById("docTypeSelect");

const fontFamilySelect = document.getElementById("fontFamilySelect");
const fontSizeRange = document.getElementById("fontSizeRange");
const fontSizeVal = document.getElementById("fontSizeVal");
const boldTextToggle = document.getElementById("boldTextToggle");

const numberedModeToggle = document.getElementById("numberedModeToggle");
const docNumber = document.getElementById("docNumber");
const docDate = document.getElementById("docDate");
const firstPartyInput = document.getElementById("firstPartyInput");
const secondPartyInput = document.getElementById("secondPartyInput");
const docSubject = document.getElementById("docSubject");
const docBody = document.getElementById("docBody");
const addressInput = document.getElementById("addressInput");
const phoneInput = document.getElementById("phoneInput");

// عناصر المعاينة
const paperPrint = document.getElementById("paperPrint");
const watermarkBg = document.getElementById("watermarkBg");
const lblCompanyNameAr = document.getElementById("lblCompanyNameAr");
const lblCompanySubAr = document.getElementById("lblCompanySubAr");
const lblCompanyNameEn = document.getElementById("lblCompanyNameEn");
const lblCompanySubEn = document.getElementById("lblCompanySubEn");
const lblCompanyLogo = document.getElementById("lblCompanyLogo");

const lblDocNumber = document.getElementById("lblDocNumber");
const lblDocDate = document.getElementById("lblDocDate");
const lblDocTitle = document.getElementById("lblDocTitle");
const lblFirstParty = document.getElementById("lblFirstParty");
const lblSecondParty = document.getElementById("lblSecondParty");
const lblDocSubject = document.getElementById("lblDocSubject");
const lblDocBody = document.getElementById("lblDocBody");
const lblSigFirstParty = document.getElementById("lblSigFirstParty");
const lblSigSecondParty = document.getElementById("lblSigSecondParty");
const lblAddress = document.getElementById("lblAddress");
const lblPhone = document.getElementById("lblPhone");

let editingDocId = null;

if (docDate) {
  docDate.value = new Date().toISOString().slice(0, 10);
}
if (docNumber) {
  docNumber.value = "AMZ-" + new Date().getFullYear() + "/001";
}

function onCompanyChange() {
  const compKey = companySelect.value;
  const comp = companiesData[compKey];

  if (paperPrint) paperPrint.className = "paper-a4 " + comp.themeClass;
  if (lblCompanyNameAr) lblCompanyNameAr.textContent = comp.nameAr;
  if (lblCompanySubAr) lblCompanySubAr.textContent = comp.subAr;
  if (lblCompanyNameEn) lblCompanyNameEn.textContent = comp.nameEn;
  if (lblCompanySubEn) lblCompanySubEn.textContent = comp.subEn;
  
  // تحديث الشعار بجانب الاسم والعلامة المائية
  if (lblCompanyLogo) lblCompanyLogo.src = comp.logo;
  if (watermarkBg) watermarkBg.style.backgroundImage = "url('" + comp.logo + "')";

  if (firstPartyInput) firstPartyInput.value = comp.firstPartyDefault;
  if (addressInput) addressInput.value = comp.address;
  if (phoneInput) phoneInput.value = comp.phone;

  if (!editingDocId && docNumber) {
    docNumber.value = comp.prefix + "-" + new Date().getFullYear() + "/001";
  }
  updatePreview();
}

function onDocTypeChange() {
  const tpl = docTemplates[docTypeSelect.value];
  if (lblDocTitle) lblDocTitle.textContent = tpl.title;
  
  const secondPartyLbl = document.getElementById("secondPartyLabel");
  if (secondPartyLbl) secondPartyLbl.textContent = tpl.secondLabel;

  if (!editingDocId) {
    if (docSubject) docSubject.value = tpl.defaultSubject;
    if (docBody) docBody.value = tpl.defaultBody;
  }
  updatePreview();
}

function updateTextStyle() {
  if (!lblDocBody) return;
  if (fontFamilySelect) lblDocBody.style.fontFamily = fontFamilySelect.value;
  
  if (fontSizeRange) {
    const size = fontSizeRange.value;
    if (fontSizeVal) fontSizeVal.textContent = size + "px";
    lblDocBody.style.fontSize = size + "px";
  }

  if (boldTextToggle) {
    lblDocBody.style.fontWeight = boldTextToggle.checked ? "bold" : "normal";
  }
}

function updatePreview() {
  if (lblDocNumber) lblDocNumber.textContent = docNumber.value || "---";
  if (lblDocDate) lblDocDate.textContent = docDate.value || "---";
  if (lblFirstParty) lblFirstParty.textContent = firstPartyInput.value || "---";
  if (lblSigFirstParty) lblSigFirstParty.textContent = firstPartyInput.value || "---";
  if (lblSecondParty) lblSecondParty.textContent = secondPartyInput.value || "........................................";
  if (lblSigSecondParty) lblSigSecondParty.textContent = secondPartyInput.value || "....................";
  if (lblDocSubject) lblDocSubject.textContent = docSubject.value || "........................................";
  
  if (lblAddress) lblAddress.textContent = addressInput.value;
  if (lblPhone) lblPhone.textContent = "هاتف: " + phoneInput.value;

  const rawText = docBody ? docBody.value : "";
  if (numberedModeToggle && numberedModeToggle.checked) {
    const lines = rawText.split('\n').filter(function(line) { return line.trim() !== ""; });
    let olHtml = "<ol>";
    lines.forEach(function(line) {
      const cleanLine = line.replace(/^\d+[\.\-]\s*/, '');
      olHtml += "<li>" + cleanLine + "</li>";
    });
    olHtml += "</ol>";
    if (lblDocBody) lblDocBody.innerHTML = olHtml;
  } else {
    if (lblDocBody) lblDocBody.innerHTML = "<p>" + rawText.replace(/\n/g, '<br>') + "</p>";
  }

  updateTextStyle();
}

function saveToArchive() {
  const docData = {
    id: editingDocId || Date.now(),
    company: companySelect.value,
    type: docTypeSelect.value,
    number: docNumber.value,
    date: docDate.value,
    firstParty: firstPartyInput.value,
    secondParty: secondPartyInput.value,
    subject: docSubject.value,
    body: docBody.value,
    address: addressInput.value,
    phone: phoneInput.value,
    isNumbered: numberedModeToggle.checked,
    fontFamily: fontFamilySelect.value,
    fontSize: fontSizeRange.value,
    isBold: boldTextToggle.checked,
    updatedAt: new Date().toLocaleString()
  };

  let archive = JSON.parse(localStorage.getItem("official_docs_archive") || "[]");
  
  if (editingDocId) {
    archive = archive.map(function(item) { return item.id === editingDocId ? docData : item; });
    alert("تم تحديث وثيقة الأرشيف بنجاح!");
    editingDocId = null;
  } else {
    archive.push(docData);
    alert("تم حفظ الوثيقة في الأرشيف بنجاح!");
  }

  localStorage.setItem("official_docs_archive", JSON.stringify(archive));
  loadArchiveList();
}

function loadArchiveList() {
  const archiveList = document.getElementById("archiveList");
  if (!archiveList) return;

  const archive = JSON.parse(localStorage.getItem("official_docs_archive") || "[]");

  if (archive.length === 0) {
    archiveList.innerHTML = '<p class="empty-msg">لا توجد وثائق محفوظة حالياً.</p>';
    return;
  }

  archiveList.innerHTML = "";
  archive.forEach(function(item) {
    const div = document.createElement("div");
    div.className = "archive-item";
    div.innerHTML = 
      '<div class="archive-info">' +
        '<strong>' + item.number + '</strong> - ' + item.subject.substring(0, 22) + '...<br>' +
        '<small>' + item.date + ' | ' + (item.secondParty || 'بدون طرف ثاني') + '</small>' +
      '</div>' +
      '<div class="archive-actions">' +
        '<button class="btn-sm btn-sm-edit" onclick="viewDocument(' + item.id + ')">فتح للتعديل</button>' +
      '</div>';
    archiveList.appendChild(div);
  });
}

window.viewDocument = function(id) {
  const archive = JSON.parse(localStorage.getItem("official_docs_archive") || "[]");
  const doc = archive.find(function(item) { return item.id === id; });
  if (doc) {
    editingDocId = doc.id;
    companySelect.value = doc.company;
    onCompanyChange();
    docTypeSelect.value = doc.type;
    docNumber.value = doc.number;
    docDate.value = doc.date;
    firstPartyInput.value = doc.firstParty;
    secondPartyInput.value = doc.secondParty;
    docSubject.value = doc.subject;
    docBody.value = doc.body;
    addressInput.value = doc.address;
    phoneInput.value = doc.phone;
    numberedModeToggle.checked = doc.isNumbered;
    
    if (doc.fontFamily) fontFamilySelect.value = doc.fontFamily;
    if (doc.fontSize) fontSizeRange.value = doc.fontSize;
    if (doc.isBold !== undefined) boldTextToggle.checked = doc.isBold;

    updatePreview();
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
};

if (companySelect) companySelect.addEventListener("change", onCompanyChange);
if (docTypeSelect) docTypeSelect.addEventListener("change", onDocTypeChange);

if (fontFamilySelect) fontFamilySelect.addEventListener("change", updatePreview);
if (fontSizeRange) fontSizeRange.addEventListener("input", updatePreview);
if (boldTextToggle) boldTextToggle.addEventListener("change", updatePreview);
if (numberedModeToggle) numberedModeToggle.addEventListener("change", updatePreview);

[docNumber, docDate, firstPartyInput, secondPartyInput, docSubject, docBody, addressInput, phoneInput].forEach(function(el) {
  if (el) {
    el.addEventListener("input", updatePreview);
    el.addEventListener("change", updatePreview);
  }
});

const saveBtn = document.getElementById("saveBtn");
if (saveBtn) saveBtn.addEventListener("click", saveToArchive);

const printBtn = document.getElementById("printBtn");
if (printBtn) printBtn.addEventListener("click", function() { window.print(); });

const pdfBtn = document.getElementById("pdfBtn");
if (pdfBtn) {
  pdfBtn.addEventListener("click", function() {
    const element = document.getElementById("paperPrint");
    const opt = {
      margin: 0,
      filename: (docNumber.value ? docNumber.value.replace(/\//g, '-') : 'document') + '.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    if (typeof html2pdf !== 'undefined') {
      html2pdf().set(opt).from(element).save();
    } else {
      window.print();
    }
  });
}

onCompanyChange();
onDocTypeChange();
loadArchiveList();
