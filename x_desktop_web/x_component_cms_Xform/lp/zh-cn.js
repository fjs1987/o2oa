MWF.xApplication.process = MWF.xApplication.process || {};
MWF.xApplication.process.Xform = MWF.xApplication.process.Xform || {};
MWF.xDesktop.requireApp("process.Xform", "lp.zh-cn", null, false);
MWF.xApplication.cms.Xform.LP = Object.merge( MWF.xApplication.process.Xform.LP, {
    "dataSaved": "数据保存成功",
    "documentPublished" : "发布成功",


    "noSelectRange": "无法确定选择范围",

    "begin": "起",
    "end": "止",
    "none": "无",

    "person": "处理人",
    "department": "部门",
    "startTime": "收到时间",
    "completedTime": "处理时间",
    "opinion": "意见",

    "systemProcess": "系统处理",

    "deleteAttachmentTitle":"删除附件确认",
    "deleteAttachment": "是否确定要删除您选中的附件？",

    "replaceAttachmentTitle":"替换附件确认",
    "replaceAttachment": "是否确定要替换您选中的附件？",
    "uploadMore": "您最多只允许上传 {n} 个附件",
    "notValidation": "数据校验未通过",

    "deleteDocumentTitle": "删除文件确认",
    "deleteDocumentText": {"html": "<div style='color: red;'>注意：您正在删除此文档，删除后文档无法找回，请您确认要删除此文件吗？</div>"},
    "documentDelete": "已经删除文件"
});