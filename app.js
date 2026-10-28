// GitHub Pages Safe Version - UTF8 Clean Code

var companiesData = {
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

var docTemplates = {
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
  financial_entitlements: {
    title: "كتاب مستحقات مالية",
    secondLabel: "اسم الشركة / الشخص المعني:",
    defaultSubject: "تأكيد وتسوية مستحقات مالية",
    defaultBody: "1. نؤكد بموجب هذا الكتاب وجود مستحقات مالية للطرف الثاني عن (...).\n2. يبلغ إجمالي المبلغ المستحق (........) دينار عراقي، وذلك وفق الكشوفات والمستندات المعتمدة بين الطرفين.\n3. تتم تسوية المستحقات وفق الإجراءات المالية المتفق عليها وبعد تدقيق الحسابات والمصادقة عليها من الجهات المختصة."
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
  }  ,administrative_order: {
    title: "أمر إداري",
    secondLabel: "اسم الموظف / الجهة المعنية:",
    defaultSubject: "أمر إداري",
    defaultBody: "استناداً إلى مقتضيات مصلحة العمل، تقرر ما يأتي:\n1. ................................................\n2. ينفذ هذا الأمر من تاريخ صدوره.\nيرجى العمل بموجبه."
  },
  custom_title: {
    title: "عنوان مخصص",
    secondLabel: "اسم الشخص / الجهة المعنية:",
    defaultSubject: "",
    defaultBody: "يرجى إدخال نص الوثيقة هنا."
  }
};

document.addEventListener("DOMContentLoaded", function () {
  var companySelect = document.getElementById("companySelect");
  var docTypeSelect = document.getElementById("docTypeSelect");
  var customDocTitleInput = document.getElementById("customDocTitleInput");
  var customDocTitleGroup = document.getElementById("customDocTitleGroup");

  var fontFamilySelect = document.getElementById("fontFamilySelect");
  var fontSizeRange = document.getElementById("fontSizeRange");
  var fontSizeVal = document.getElementById("fontSizeVal");
  var boldTextToggle = document.getElementById("boldTextToggle");
  var bodyTextColorSelect = document.getElementById("bodyTextColorSelect");

  var numberedModeToggle = document.getElementById("numberedModeToggle");
  var docNumber = document.getElementById("docNumber");
  var docDate = document.getElementById("docDate");
  var firstPartyInput = document.getElementById("firstPartyInput");
  var secondPartyInput = document.getElementById("secondPartyInput");
  var signatureMode = document.getElementById("signatureMode");
  var managerNameInput = document.getElementById("managerNameInput");
  var managerNameGroup = document.getElementById("managerNameGroup");
  var managerTitleSelect = document.getElementById("managerTitleSelect");
  var customManagerTitleInput = document.getElementById("customManagerTitleInput");
  var customManagerTitleGroup = document.getElementById("customManagerTitleGroup");
  var lblSigSecondTitle = document.getElementById("lblSigSecondTitle");
  var firstSignatureBox = document.querySelector(".footer-signatures .sig-box");
  var docSubject = document.getElementById("docSubject");
  var docBody = document.getElementById("docBody");
  var addressInput = document.getElementById("addressInput");
  var phoneInput = document.getElementById("phoneInput");

  var paperPrint = document.getElementById("paperPrint");
  var watermarkBg = document.getElementById("watermarkBg");
  var lblCompanyNameAr = document.getElementById("lblCompanyNameAr");
  var lblCompanySubAr = document.getElementById("lblCompanySubAr");
  var lblCompanyNameEn = document.getElementById("lblCompanyNameEn");
  var lblCompanySubEn = document.getElementById("lblCompanySubEn");
  var lblCompanyLogo = document.getElementById("lblCompanyLogo");

  var lblDocNumber = document.getElementById("lblDocNumber");
  var lblDocDate = document.getElementById("lblDocDate");
  var lblDocTitle = document.getElementById("lblDocTitle");
  var lblFirstParty = document.getElementById("lblFirstParty");
  var lblSecondParty = document.getElementById("lblSecondParty");
  var lblDocSubject = document.getElementById("lblDocSubject");
  var lblDocBody = document.getElementById("lblDocBody");
  var lblSigFirstParty = document.getElementById("lblSigFirstParty");
  var lblSigSecondParty = document.getElementById("lblSigSecondParty");
  var lblAddress = document.getElementById("lblAddress");
  var lblPhone = document.getElementById("lblPhone");

  var editingDocId = null;

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  // Allow only basic text formatting when loading/saving rich text.
  function sanitizeRichHtml(html) {
    var parser = new DOMParser();
    var parsed = parser.parseFromString(String(html || ""), "text/html");
    var allowed = { P: true, DIV: true, BR: true, B: true, STRONG: true, I: true, EM: true, U: true, SPAN: true, FONT: true, OL: true, UL: true, LI: true };
    function clean(node) {
      Array.from(node.childNodes).forEach(function (child) {
        if (child.nodeType === 1) {
          if (!allowed[child.tagName]) {
            child.replaceWith(document.createTextNode(child.textContent || ""));
            return;
          }
          // Capture formatting before removing untrusted attributes.
          var originalStyle = child.getAttribute("style") || "";
          var originalColor = child.getAttribute("color") || "";
          Array.from(child.attributes).forEach(function (attr) { child.removeAttribute(attr.name); });
          if (child.tagName === "FONT") {
            var fontColor = /^#[0-9a-f]{3,8}$/i.test(originalColor) || /^[a-z]{3,20}$/i.test(originalColor) ? originalColor : "";
            var replacement = document.createElement("span");
            if (fontColor) replacement.setAttribute("style", "color:" + fontColor);
            while (child.firstChild) replacement.appendChild(child.firstChild);
            child.replaceWith(replacement);
            clean(replacement);
            return;
          }
          if (child.tagName === "SPAN") {
            // Preserve only safe inline color/highlight properties.
            var colorMatch = originalStyle.match(/(?:^|;)\s*color\s*:\s*(#[0-9a-f]{3,8}|rgb\([0-9, .%]+\)|[a-z]+)\s*(?=;|$)/i);
            var bgMatch = originalStyle.match(/(?:^|;)\s*background-color\s*:\s*(#[0-9a-f]{3,8}|rgb\([0-9, .%]+\)|[a-z]+)\s*(?=;|$)/i);
            var styles = [];
            if (colorMatch) styles.push("color:" + colorMatch[1]);
            if (bgMatch) styles.push("background-color:" + bgMatch[1]);
            if (styles.length) child.setAttribute("style", styles.join(";"));
          }
          clean(child);
        } else if (child.nodeType !== 3) {
          child.remove();
        }
      });
    }
    clean(parsed.body);
    return parsed.body.innerHTML;
  }

  function getBodyHtml() {
    return docBody ? sanitizeRichHtml(docBody.innerHTML) : "";
  }

  function setBodyContent(value) {
    if (!docBody) return;
    var str = String(value == null ? "" : value);
    // Existing archived documents store plain text; recognize them and escape safely.
    if (/<\/?(p|br|b|strong|i|em|u|span|ol|ul|li)(\s|>|\/)/i.test(str)) {
      docBody.innerHTML = sanitizeRichHtml(str);
    } else {
      docBody.innerHTML = escapeHtml(str).replace(/\r?\n/g, "<br>");
    }
  }

  function getBodyPlainText() {
    return docBody ? (docBody.innerText || docBody.textContent || "") : "";
  }

  if (docDate) {
    docDate.value = new Date().toISOString().slice(0, 10);
  }

  // يولّد الرقم التالي اعتمادًا على أرشيف هذا المتصفح، مع فصل التسلسل حسب الشركة والسنة.
  function getNextDocumentNumber(compKey, year) {
    var comp = companiesData[compKey];
    if (!comp) return "";
    var archive = [];
    try {
      archive = JSON.parse(localStorage.getItem("official_docs_archive") || "[]");
      if (!Array.isArray(archive)) archive = [];
    } catch (e) {
      archive = [];
    }
    var prefix = comp.prefix + "-" + year + "/";
    var maxNumber = 0;
    archive.forEach(function (item) {
      if (!item || item.company !== compKey || typeof item.number !== "string") return;
      if (item.number.indexOf(prefix) !== 0) return;
      var match = item.number.slice(prefix.length).match(/^(\\d+)$/);
      if (match) maxNumber = Math.max(maxNumber, parseInt(match[1], 10) || 0);
    });
    return prefix + String(maxNumber + 1).padStart(3, "0");
  }

  function onCompanyChange() {
    if (!companySelect) return;
    var compKey = companySelect.value;
    var comp = companiesData[compKey];

    if (paperPrint) paperPrint.className = "paper-a4 " + comp.themeClass;
    if (lblCompanyNameAr) lblCompanyNameAr.textContent = comp.nameAr;
    if (lblCompanySubAr) lblCompanySubAr.textContent = comp.subAr;
    if (lblCompanyNameEn) lblCompanyNameEn.textContent = comp.nameEn;
    if (lblCompanySubEn) lblCompanySubEn.textContent = comp.subEn;

    if (lblCompanyLogo) lblCompanyLogo.src = comp.logo;
    if (watermarkBg) watermarkBg.style.backgroundImage = "url('" + comp.logo + "')";

    if (firstPartyInput) firstPartyInput.value = comp.firstPartyDefault;
    if (addressInput) addressInput.value = comp.address;
    if (phoneInput) phoneInput.value = comp.phone;

    if (!editingDocId && docNumber) {
      docNumber.value = getNextDocumentNumber(compKey, new Date().getFullYear());
    }
    updatePreview();
  }

  function onDocTypeChange() {
    if (!docTypeSelect) return;
    var isCustomTitle = docTypeSelect.value === "custom_title";
    var tpl = docTemplates[docTypeSelect.value] || docTemplates.custom_title;
    if (customDocTitleGroup) customDocTitleGroup.hidden = !isCustomTitle;
    if (lblDocTitle) lblDocTitle.textContent = isCustomTitle ? ((customDocTitleInput && customDocTitleInput.value.trim()) || "عنوان مخصص") : tpl.title;
    var secondPartyLbl = document.getElementById("secondPartyLabel");
    if (secondPartyLbl) secondPartyLbl.textContent = tpl.secondLabel;
    if (!editingDocId) {
      if (docSubject) docSubject.value = tpl.defaultSubject;
      if (docBody) docBody.innerHTML = escapeHtml(tpl.defaultBody).replace(/\n/g, "<br>");
    }
    updatePreview();
  }

  function updateTextStyle() {
    if (!lblDocBody) return;
    if (fontFamilySelect) lblDocBody.style.fontFamily = fontFamilySelect.value;

    if (fontSizeRange) {
      var size = fontSizeRange.value;
      if (fontSizeVal) fontSizeVal.textContent = size + "px";
      lblDocBody.style.fontSize = size + "px";
    }

    if (boldTextToggle) {
      lblDocBody.style.fontWeight = boldTextToggle.checked ? "bold" : "normal";
    }
    if (bodyTextColorSelect) {
      lblDocBody.style.color = bodyTextColorSelect.value || "#202020";
    }
  }

  // Convert editor paragraphs/line breaks to individual lines while retaining safe inline formatting.
  function getFormattedBodyLines() {
    var html = getBodyHtml();
    html = html
      .replace(/<br\s*\/?\s*>/gi, "\n")
      .replace(/<\/(?:p|div|li)\s*>/gi, "\n")
      .replace(/<(?:p|div|li)(?:\s[^>]*)?>/gi, "");
    return html.split(/\r?\n/).map(function (line) {
      return sanitizeRichHtml(line.trim());
    }).filter(function (line) {
      var temp = document.createElement("div");
      temp.innerHTML = line;
      return (temp.textContent || "").trim() !== "";
    });
  }

  function updatePreview() {
    if (docTypeSelect && lblDocTitle) {
      var selectedType = docTypeSelect.value;
      if (customDocTitleGroup) customDocTitleGroup.hidden = selectedType !== "custom_title";
      lblDocTitle.textContent = selectedType === "custom_title" ? ((customDocTitleInput && customDocTitleInput.value.trim()) || "عنوان مخصص") : ((docTemplates[selectedType] && docTemplates[selectedType].title) || "عنوان الوثيقة");
    }
    if (lblDocNumber && docNumber) lblDocNumber.textContent = docNumber.value || "---";
    if (lblDocDate && docDate) lblDocDate.textContent = docDate.value || "---";
    if (lblFirstParty && firstPartyInput) lblFirstParty.textContent = firstPartyInput.value || "---";
    if (lblSigFirstParty && firstPartyInput) lblSigFirstParty.textContent = firstPartyInput.value || "---";
    if (lblSecondParty && secondPartyInput) lblSecondParty.textContent = secondPartyInput.value || "........................................";
    var useManagerSignature = signatureMode && signatureMode.value === "manager";
    if (managerNameGroup) managerNameGroup.hidden = !useManagerSignature;
    var selectedManagerTitle = managerTitleSelect ? managerTitleSelect.value : "المدير المفوض";
    var useCustomManagerTitle = selectedManagerTitle === "other";
    if (customManagerTitleGroup) customManagerTitleGroup.hidden = !useManagerSignature || !useCustomManagerTitle;
    var managerTitle = useCustomManagerTitle
      ? ((customManagerTitleInput && customManagerTitleInput.value.trim()) || "المسمى الوظيفي")
      : selectedManagerTitle;
    // عند اختيار صفة موقّع إداري، أخفِ توقيع الطرف الأول واترك خانة الموقّع المحدد فقط.
    if (firstSignatureBox) firstSignatureBox.hidden = useManagerSignature;
    if (lblSigSecondTitle) lblSigSecondTitle.textContent = useManagerSignature ? managerTitle : "توقيع الطرف الثاني";
    if (lblSigSecondParty) {
      var signatureName = useManagerSignature ? (managerNameInput ? managerNameInput.value : "") : (secondPartyInput ? secondPartyInput.value : "");
      lblSigSecondParty.textContent = signatureName || (useManagerSignature ? "........................" : "....................");
    }
    if (lblDocSubject && docSubject) lblDocSubject.textContent = docSubject.value || "........................................";

    if (lblAddress && addressInput) lblAddress.textContent = addressInput.value;
    if (lblPhone && phoneInput) lblPhone.textContent = phoneInput.value;

    if (numberedModeToggle && numberedModeToggle.checked) {
      var lines = getFormattedBodyLines();
      var olHtml = '<ol class="auto-numbered-clauses" dir="rtl">';
      lines.forEach(function (line) {
        // Avoid duplicated manual numbering when automatic numbering is enabled.
        line = line.replace(/^\s*(?:<[^>]+>)*\s*\d+[.)\-،]\s*/, "");
        olHtml += "<li>" + line + "</li>";
      });
      olHtml += "</ol>";
      if (lblDocBody) lblDocBody.innerHTML = olHtml;
    } else {
      if (lblDocBody) lblDocBody.innerHTML = "<div>" + getBodyHtml() + "</div>";
    }

    updateTextStyle();
  }

  function saveToArchive() {
    var wasEditingExistingDocument = !!editingDocId;
    var docData = {
      id: editingDocId || Date.now(),
      company: companySelect.value,
      type: docTypeSelect.value,
      customDocTitle: customDocTitleInput ? customDocTitleInput.value : "",
      number: docNumber.value,
      date: docDate.value,
      firstParty: firstPartyInput.value,
      secondParty: secondPartyInput.value,
      signatureMode: signatureMode ? signatureMode.value : "parties",
      managerName: managerNameInput ? managerNameInput.value : "",
      managerTitle: managerTitleSelect ? managerTitleSelect.value : "المدير المفوض",
      customManagerTitle: customManagerTitleInput ? customManagerTitleInput.value : "",
      subject: docSubject.value,
      body: getBodyHtml(),
      address: addressInput.value,
      phone: phoneInput.value,
      isNumbered: numberedModeToggle.checked,
      fontFamily: fontFamilySelect.value,
      fontSize: fontSizeRange.value,
      isBold: boldTextToggle.checked,
      bodyTextColor: bodyTextColorSelect ? bodyTextColorSelect.value : "#202020",
      updatedAt: new Date().toLocaleString()
    };

    var archive = JSON.parse(localStorage.getItem("official_docs_archive") || "[]");

    if (editingDocId) {
      archive = archive.map(function (item) { return item.id === editingDocId ? docData : item; });
      alert("Done!");
      editingDocId = null;
    } else {
      archive.push(docData);
      alert("Saved!");
    }

    localStorage.setItem("official_docs_archive", JSON.stringify(archive));
    loadArchiveList();

    // بعد حفظ وثيقة جديدة فقط، جهّز الرقم التالي دون تغيير رقم الوثائق القديمة عند تعديلها.
    if (!wasEditingExistingDocument && docNumber) {
      docNumber.value = getNextDocumentNumber(companySelect.value, new Date().getFullYear());
      updatePreview();
    }
  }

  function loadArchiveList() {
    var archiveList = document.getElementById("archiveList");
    if (!archiveList) return;

    var archive = JSON.parse(localStorage.getItem("official_docs_archive") || "[]");

    if (archive.length === 0) {
      archiveList.innerHTML = '<p class="empty-msg">No saved documents.</p>';
      return;
    }

    archiveList.innerHTML = "";
    archive.forEach(function (item) {
      var div = document.createElement("div");
      div.className = "archive-item";
      div.innerHTML =
        '<div class="archive-info">' +
        '<strong>' + item.number + '</strong> - ' + item.subject.substring(0, 20) + '...<br>' +
        '<small>' + item.date + '</small>' +
        '</div>' +
        '<div class="archive-actions">' +
        '<button class="btn-sm btn-sm-edit" onclick="viewDocument(' + item.id + ')">Open</button>' +
        '</div>';
      archiveList.appendChild(div);
    });
  }

  window.viewDocument = function (id) {
    var archive = JSON.parse(localStorage.getItem("official_docs_archive") || "[]");
    var doc = archive.find(function (item) { return item.id === id; });
    if (doc) {
      editingDocId = doc.id;
      companySelect.value = doc.company;
      onCompanyChange();
      docTypeSelect.value = doc.type;
      if (customDocTitleInput) customDocTitleInput.value = doc.customDocTitle || "";
      docNumber.value = doc.number;
      docDate.value = doc.date;
      firstPartyInput.value = doc.firstParty;
      secondPartyInput.value = doc.secondParty;
      if (signatureMode) signatureMode.value = doc.signatureMode || "parties";
      if (managerNameInput) managerNameInput.value = doc.managerName || "";
      if (managerTitleSelect) managerTitleSelect.value = doc.managerTitle || "المدير المفوض";
      if (customManagerTitleInput) customManagerTitleInput.value = doc.customManagerTitle || "";
      docSubject.value = doc.subject;
      setBodyContent(doc.body);
      addressInput.value = doc.address;
      phoneInput.value = doc.phone;
      numberedModeToggle.checked = doc.isNumbered;

      if (doc.fontFamily) fontFamilySelect.value = doc.fontFamily;
      if (doc.fontSize) fontSizeRange.value = doc.fontSize;
      if (doc.isBold !== undefined) boldTextToggle.checked = doc.isBold;
      if (bodyTextColorSelect) bodyTextColorSelect.value = doc.bodyTextColor || "#202020";

      updatePreview();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (companySelect) companySelect.addEventListener("change", onCompanyChange);
  if (docTypeSelect) docTypeSelect.addEventListener("change", onDocTypeChange);
  if (customDocTitleInput) customDocTitleInput.addEventListener("input", updatePreview);
  if (signatureMode) signatureMode.addEventListener("change", updatePreview);
  if (managerNameInput) {
    managerNameInput.addEventListener("input", updatePreview);
    managerNameInput.addEventListener("change", updatePreview);
  }
  if (managerTitleSelect) managerTitleSelect.addEventListener("change", updatePreview);
  if (customManagerTitleInput) {
    customManagerTitleInput.addEventListener("input", updatePreview);
    customManagerTitleInput.addEventListener("change", updatePreview);
  }

  if (fontFamilySelect) fontFamilySelect.addEventListener("change", updatePreview);
  if (fontSizeRange) fontSizeRange.addEventListener("input", updatePreview);
  if (boldTextToggle) boldTextToggle.addEventListener("change", updatePreview);
  if (bodyTextColorSelect) bodyTextColorSelect.addEventListener("input", updatePreview);
  if (numberedModeToggle) numberedModeToggle.addEventListener("change", updatePreview);

  [docNumber, docDate, firstPartyInput, secondPartyInput, docSubject, docBody, addressInput, phoneInput].forEach(function (el) {
    if (el) {
      el.addEventListener("input", updatePreview);
      el.addEventListener("change", updatePreview);
    }
  });

  var richToolbar = document.querySelector(".rich-toolbar");
  var savedSelection = null;

  function rememberSelection() {
    var selection = window.getSelection();
    if (selection && selection.rangeCount && docBody &&
        (docBody.contains(selection.anchorNode) || selection.anchorNode === docBody)) {
      savedSelection = selection.getRangeAt(0).cloneRange();
    }
  }

  function restoreSelection() {
    if (!docBody) return false;
    docBody.focus();
    if (!savedSelection) return false;
    try {
      var selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(savedSelection);
      return true;
    } catch (err) {
      return false;
    }
  }

  if (docBody) {
    ["keyup", "mouseup", "touchend", "focus"].forEach(function (eventName) {
      docBody.addEventListener(eventName, rememberSelection);
    });
    docBody.addEventListener("input", function () {
      rememberSelection();
      updatePreview();
    });
  }

  if (richToolbar) {
    // Save the selection before toolbar controls take focus, including color inputs.
    richToolbar.addEventListener("pointerdown", rememberSelection, true);
    richToolbar.addEventListener("mousedown", rememberSelection, true);
    richToolbar.addEventListener("click", function (event) {
      var button = event.target.closest("button[data-command]");
      if (!button || !docBody) return;
      restoreSelection();
      var command = button.getAttribute("data-command");
      try {
        document.execCommand(command, false, null);
      } catch (err) {
        console.warn("Rich-text command failed:", command, err);
      }
      rememberSelection();
      updatePreview();
    });
  }

  function applyInlineColor(command, picker) {
    if (!picker || !docBody) return;
    function applyColor() {
      restoreSelection();
      var applied = false;
      try {
        applied = document.execCommand(command, false, picker.value);
        if (!applied && command === "hiliteColor") {
          applied = document.execCommand("backColor", false, picker.value);
        }
      } catch (err) {
        if (command === "hiliteColor") {
          try { applied = document.execCommand("backColor", false, picker.value); } catch (_) {}
        }
      }
      rememberSelection();
      updatePreview();
    }
    picker.addEventListener("change", applyColor);
    picker.addEventListener("input", function () {
      // Color picker input events can fire while the native picker is open;
      // apply on change after the user has chosen a final color.
    });
  }

  applyInlineColor("foreColor", document.getElementById("textColorPicker"));
  applyInlineColor("hiliteColor", document.getElementById("highlightColorPicker"));

  var saveBtn = document.getElementById("saveBtn");
  if (saveBtn) saveBtn.addEventListener("click", saveToArchive);

  var printBtn = document.getElementById("printBtn");
  if (printBtn) printBtn.addEventListener("click", function () { window.print(); });

  var pdfBtn = document.getElementById("pdfBtn");
  if (pdfBtn) {
    pdfBtn.addEventListener("click", function () {
      var element = document.getElementById("paperPrint");
      var opt = {
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
});
