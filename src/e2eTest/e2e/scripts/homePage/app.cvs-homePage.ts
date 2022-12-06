import { browser, by, element, ElementFinder } from 'protractor';
import { __param } from "tslib";
import { config } from "process";
import { uploadFile } from "./homePage";
//browser.ignoreSynchronization = true;

describe('Home Page', () => {
  let homepage: uploadFile;
  const fs = require("fs");
  let sampleMap = new Map();
  let rawdata = fs.readFileSync('../../TestResources/testData.json');
  let web = JSON.parse(rawdata);
  beforeEach(() => {
    browser.waitForAngularEnabled(false);
    homepage = new uploadFile();
  });
  it('Navigate to the website' , ()=> {
        homepage.navigate();
  });

//   it('upload doc' , ()=> {
//     homepage.uploadFile();
// });

  it('Key Highlights_Date ', ()=>{
    homepage.keyHighlightDate(web["keyHighlights"]["month"],web["keyHighlights"]["year"] );
  })

  it('Key Highlights_Enter Highlights', ()=>{
    homepage.keyHighlights(web["keyHighlights"]["highlights"]);
  })

  it('Key Highlights_Submit', ()=>{
    homepage.keyHighlightsSubmit();
  })

  it('Add Metrics_Date', ()=>{
    homepage.addMetricsDate(web["addMetrics"]["dateMonth"], web["addMetrics"]["dateYear"]);
  })
  it('Add Metrics_New LOB', ()=>{
    homepage.addMetricsNewLOB(web["addMetrics"]["newLOB"]);
  })

  it('Add Metrics_Metric Name', ()=>{
    homepage.addMetricName(web["addMetrics"]["Name"]);
  })
  it('Add Metrics_Description', ()=>{
    homepage.addMetricDescription(web["addMetrics"]["Description"]);
  })
  it('Add Metrics_Value Type', ()=>{
    homepage.addMetricValueType(web["addMetrics"]["Type"]);
  })
  it('Add Metrics_Monthly Actual', ()=>{
    homepage.addMetricMonthlyActual(web["addMetrics"]["MonthlyActual"]);
  })
  it('Add Metrics_monthly Target', ()=>{
    homepage.addMetricMonthlyTarget(web["addMetrics"]["MonthlyTarget"]);
  })
  it('Add metrics_YTD Actual', ()=>{
    homepage.addMetricyYtdActual(web["addMetrics"]["YtdActual"]);
  })
  it('Add Metrics_YTD Target', ()=>{
    homepage.addMetricYtdTarget(web["addMetrics"]["YtdTarget"]);
  })
  it('Add Metrics_Submit', ()=>{
    homepage.addMetricSubmit();
  })

  it('Edit Metrics_Date', ()=>{
    homepage.editMetricDetails(web["editMetric"]["dateMonth"] , web["editMetric"]["dateYear"] );
  })

  it('check re-enable metrics tab', ()=>{
    homepage.selectReEnableTab();
  })

  it('check manage permission tab', ()=>{
    homepage.selectManagePermissionTab();
  })

  it('Manage Permissions_create new access', ()=>{
    homepage.createNewAccess(web["managePermission"]["id"]);
  })

})
