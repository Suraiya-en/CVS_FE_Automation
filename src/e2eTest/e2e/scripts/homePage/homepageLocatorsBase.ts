const fs = require("fs");
let sampleMap = new Map();
let rawdata = fs.readFileSync('../../TestResources/locatorsData.json');
let locators = JSON.parse(rawdata);

export class homepageLocatorsBase {
  fileUploadButton: any;
  keyHighlightsButton: any;
  addLOBButton: any;
  editLOButton: any;
  reEnableMetricsButton: any;
  managePErmissionsButton: any;
  uploadButton: any;
  highlightDate: any;
  enterHighlight: any;
  keyHighlightSubmit: any;
  addMetricsDate: any;
  monthSelect: any;
  yearSelect: any;
  addMetricLob: any;
  addMetricNewLob: any;
  addMetricsMetricName: any;
  addMetricsDescription: any;
  addMetricsMonthlyActual: any;
  addMetricsMonthlyTarget: any;
  addMetricsYtdActual: any;
  addMetricsYtdTarget: any;
  addMetricsSubmitButton: any;
  createNewAccess: any;

  constructor() {
    // this.fileUploadButton = locators["KeyHighlights"]["tabFileUpload"];
    this.keyHighlightsButton = locators["KeyHighlights"]["tabKeyHighlights"];
    this.uploadButton = locators["FileUpload"]["uploadButton"];
    this.highlightDate = locators["KeyHighlights"]["enterDateHighlights"];
    this.enterHighlight = locators["KeyHighlights"]["enterHighlight"];
    this.keyHighlightSubmit = locators["KeyHighlights"]["submitButton"];
    this.addLOBButton = locators["AddMetrics"]["tabAddLOB"];
    this.addMetricsDate = locators["AddMetrics"]["AddMetricsDate"];
    this.addMetricLob =locators["AddMetrics"]["AddMetricsLOB"]; 
    this.addMetricNewLob = locators["AddMetrics"]["AddMetricsNewLOB"]; 
    this.addMetricsMetricName = locators["AddMetrics"]["AddMetricsMetricName"];
    this.addMetricsDescription = locators["AddMetrics"]["AddMetricsDescription"];
    this.addMetricsMonthlyActual = locators["AddMetrics"]["AddMetricsMonthlyActual"];
    this.addMetricsMonthlyTarget = locators["AddMetrics"]["AddMetricsMonthlyTarget"];
    this.addMetricsYtdActual = locators["AddMetrics"]["AddMetricsYtdActual"];
    this.addMetricsYtdTarget = locators["AddMetrics"]["AddMetricsYtdTarget"];
    this.addMetricsSubmitButton = locators["AddMetrics"]["AddMetricsSubmitButton"];
     this.editLOButton = locators["editMetrics"]["tabEditLOB"];
     this.monthSelect = locators["editMetrics"]["monthSelect"];
     this.yearSelect = locators["editMetrics"]["yearSelect"];
    this.reEnableMetricsButton = locators["ReEnable"]["tabReEnableMetrics"];
    this.managePErmissionsButton = locators["ManagePermissions"]["tabManagePermission"];
    this.createNewAccess = locators["ManagePermissions"]["createNewAccess"];
   
  }
}
