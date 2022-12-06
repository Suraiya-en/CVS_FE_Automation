import {  by, element,ExpectedConditions, promise , WebElement , ElementFinder} from 'protractor';
import { homepageLocatorsBase } from './homepageLocatorsBase';
import { basePage } from '../../utilityClasses/BaseClass'
var log4js = require("../../../util/helper.js")
import{Alert} from 'selenium-webdriver';
var protractor = require( 'protractor' );
var browser = require("protractor").protractor.browser;
let path = require("path");

let base = new homepageLocatorsBase();

export class uploadFile extends basePage
{
   //   uploadFile()
   //   {
   //      let filePath = '../../TestResources/Book1.csv';
   //      let fpath = path.resolve(__dirname,filePath);
   //      browser.ignoreSynchronization = true;
   //      browser.findElement(by.xpath(base.uploadButton)).then(function(el: WebElement){
   //          //scroll till the upload file button om screen
   //          browser.executeScript("arguments[0].scrollIntoView(true);",el);
   //          el.sendKeys(fpath);
   //      });

   //   this.sleep(3000);
   //   }

     navigate()
     {
     
      browser.waitForAngularEnabled(false);
      browser.get(browser.params.appUrl);
      browser.driver.manage().window().maximize();
      browser.waitForAngular();
      this.sleep(5000);

     }
     keyHighlightDate(month : string , year : string)
     {
      this.click(base.keyHighlightsButton).then(() => {
         console.log("passed");
        }).catch(e => {
         console.log(e.name);
         console.log(e.message);
         });
         let onPage: ElementFinder = element(by.xpath(base.keyHighlightsButton)); //ElementFinder function used here 
        onPage.getAttribute('innerText').then((text) => {
          log4js.getLogger().info(text)
        })
      this.sleep(3000);
      this.click(base.highlightDate).then(() => {
         console.log("passed");
        }).catch(e => {
         console.log(e.name);
         console.log(e.message);
         })
      this.enterTextByBrowser(month);
      this.keyPress(protractor.Key.RIGHT);
      this.enterTextByBrowser(year);
        }
     keyHighlights(highlight:string)
     {
      this.waitForVisible(base.enterHighlight , 5000);
        this.enterTextByXpath(base.enterHighlight , highlight).then(() => {
         console.log("passed");
        }).catch(e => {
         console.log(e.name);
         console.log(e.message);
         });
     }

     keyHighlightsSubmit()
     {
      this.click(base.keyHighlightSubmit).then(() => {
         console.log("passed");
        }).catch(e => {
         console.log(e.name);
         console.log(e.message);
         })
     }

    
      addMetricsDate(month : string , year :string) {

         this.click(base.addLOBButton).then(() => {
            console.log("passed");
           }).catch(e => {
            console.log(e.name);
            console.log(e.message);
            });;
         this.sleep(3000);
         let onPage: ElementFinder = element(by.xpath(base.addLOBButton)); //ElementFinder function used here 
        onPage.getAttribute('innerText').then((text) => {
          log4js.getLogger().info(text)
        })
         this.click(base.addMetricsDate).then(() => {
            console.log("passed");
           }).catch(e => {
            console.log(e.name);
            console.log(e.message);
            });;
         this.enterTextByBrowser(month);
         this.keyPress(protractor.Key.RIGHT);
         this.enterTextByBrowser(year);
  
 
     }

     addMetricsNewLOB(newLOB :string)
     {
      this.keyPress(protractor.Key.TAB);
      this.keyPress(protractor.Key.DOWN);
        this.keyPress(protractor.Key.ENTER);
        this.click(base.addMetricNewLob).then(() => {
         console.log("passed");
        }).catch(e => {
         console.log(e.name);
         console.log(e.message);
         });;
         this.waitForVisible(base.addMetricNewLob , 5000);
        this.enterTextByBrowser(newLOB);
     }

     addMetricName(metricName:string)
     {
this.waitForVisible(base.addMetricsMetricName , 5000);
      this.enterTextByXpath(base.addMetricsMetricName, metricName).then(() => {
         console.log("passed");
        }).catch(e => {
         console.log(e.name);
         console.log(e.message);
         });

     }

     addMetricDescription(metricDescription:string)
     {
      this.waitForVisible(base.addMetricsDescription , 5000);
      this.enterTextByXpath(base.addMetricsDescription, metricDescription).then(() => {
         console.log("passed");
        }).catch(e => {
         console.log(e.name);
         console.log(e.message);
         });;
       
     }

     addMetricValueType(type : string)
     {
      this.keyPress(protractor.Key.TAB);
        this.enterTextByBrowser(type);
        this.keyPress(protractor.Key.ENTER);
     }
     addMetricMonthlyActual(monthlyActual : string)
     {
      this.waitForVisible(base.addMetricsMonthlyActual , 5000);
      this.enterTextByXpath(base.addMetricsMonthlyActual, monthlyActual).then(() => {
         console.log("passed");
        }).catch(e => {
         console.log(e.name);
         console.log(e.message);
         });
     }
     addMetricMonthlyTarget(monthlyTarget:string)
     {
      this.waitForVisible(base.addMetricsMonthlyTarget , 5000);
      this.enterTextByXpath(base.addMetricsMonthlyTarget, monthlyTarget).then(() => {
         console.log("passed");
        }).catch(e => {
         console.log(e.name);
         console.log(e.message);
         });
     }
     addMetricyYtdActual (ytdActual:string)
     {
      this.waitForVisible(base.addMetricsYtdActual , 5000);
      this.enterTextByXpath(base.addMetricsYtdActual, ytdActual).then(() => {
         console.log("passed");
        }).catch(e => {
         console.log(e.name);
         console.log(e.message);
         });
     }
     addMetricYtdTarget(ytdTarget:string)
     {
      this.waitForVisible(base.addMetricsYtdTarget , 5000);
      this.enterTextByXpath(base.addMetricsYtdTarget, ytdTarget).then(() => {
         console.log("passed");
        }).catch(e => {
         console.log(e.name);
         console.log(e.message);
         });
     }

     addMetricSubmit()
     {
      this.waitForVisible(base.addMetricsSubmitButton , 5000);
      this.click(base.addMetricsSubmitButton).then(() => {
         console.log("passed");
        }).catch(e => {
         console.log(e.name);
         console.log(e.message);
         });
         this.sleep(3000);
     }
     editMetricDetails(month:string , year:string)
     {
      browser.executeScript( 'window.scrollTo(0,0);').then( function() {
      } )
      this.click(base.editLOButton).then(() => {
         console.log("passed");
        }).catch(e => {
         console.log(e.name);
         console.log(e.message);
         });;
      this.sleep(3000);
      let onPage: ElementFinder = element(by.xpath(base.editLOButton)); //ElementFinder function used here 
        onPage.getAttribute('innerText').then((text) => {
          log4js.getLogger().info(text)
        })
      this.keyPress(protractor.Key.TAB)
      this.enterTextByBrowser(month)
      this.keyPress(protractor.Key.ENTER);
      this.sleep(3000);

      this.keyPress(protractor.Key.TAB)
      this.enterTextByBrowser(year)
      this.keyPress(protractor.Key.ENTER);
      this.sleep(3000);
     }

     selectReEnableTab()
     {
      this.click(base.reEnableMetricsButton).then(() => {
         console.log("passed");
        }).catch(e => {
         console.log(e.name);
         console.log(e.message);
         });;
         let onPage: ElementFinder = element(by.xpath(base.reEnableMetricsButton)); //ElementFinder function used here 
        onPage.getAttribute('innerText').then((text) => {
          log4js.getLogger().info(text)
        })
      this.sleep(3000);
     }

     selectManagePermissionTab()
     {
      this.click(base.managePErmissionsButton).then(() => {
         console.log("passed");
        }).catch(e => {
         console.log(e.name);
         console.log(e.message);
         });;
         let onPage: ElementFinder = element(by.xpath(base.managePErmissionsButton)); //ElementFinder function used here 
        onPage.getAttribute('innerText').then((text) => {
          log4js.getLogger().info(text)
        })
      this.sleep(3000);
     }

     createNewAccess(userId:string)
     {
      this.waitForVisible(base.createNewAccess , 5000);
      this.click(base.createNewAccess).then(() => {
         console.log("passed");
        }).catch(e => {
         console.log(e.name);
         console.log(e.message);
         });;
     
      this.keyPress(protractor.Key.TAB);
      this.keyPress(protractor.Key.TAB);
      this.enterTextByBrowser(userId);
      this.keyPress(protractor.Key.ENTER);
      this.waitForVisible(base.createNewAccess , 5000);
      this.click(base.createNewAccess).then(() => {
         console.log("passed");
        }).catch(e => {
         console.log(e.name);
         console.log(e.message);
         });;
    
     }
}