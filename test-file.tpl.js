angular.module('eutTemplatesMain').run(['$templateCache', function ($templateCache) {
  $templateCache.put("eut/clientlib/template/business-contact-us/business-contact-us-result.tpl.html",
    "<div class=\"eut_complete_area\" aria-relevant=\"all\" aria-atomic=\"false\" aria-hidden=\"true\">\n"   +
    "    <div class=\"eut_complete_cont\">\n" +
    "        <p class=\"title_gate\" ng-if=\"viewModel.enquiryInfo.enquiryType == 1 && viewModel.formList.thankyouPageTitle\">\n" +
    "            {{'eu-businesscontactus-result-thank-you1'|i18n}}\n" +
    "            <span>{{'eu-businesscontactus-result-desc'|i18n}}</span>\n" +
    "        </p>\n" +
    "\n" +
    "        <p class=\"title_gate\" ng-if=\"viewModel.enquiryInfo.enquiryType == 2 && viewModel.formList.thankyouPageTitle\">\n" +
    "            {{'eu-businesscontactus-result-thank-you2'|i18n}}\n" +
    "            <span></span>\n" +
    "        </p>\n" +
    "        <div class=\"eut_user_input_info\">\n" +
    "            <div class=\"eut_user_info_detail\">\n" +
    "                <div class=\"img_wrap\">\n" +
    "                    <div class=\"img_area\">\n" +
    "                        <img src=\"/content/dam/kwcms/kme/global/en/assets/contents/utility/contact-us/Kia-contact-us-thank-you-520x260.jpg\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"info_wrap\">\n" +
    "                    <ul>\n" +
    "                        <li ng-if=\"viewModel.companyInfo.customerCategoryName\">\n" +
    "                            <span class=\"title\" >{{'eu-businesscontactus-customer-category'|i18n}}</span>\n" +
    "                            <span>{{viewModel.companyInfo.customerCategoryName}}</span>\n" +
    "                        </li>\n" +
    "                        <li ng-if=\"viewModel.companyInfo.companyName\">\n" +
    "                            <span class=\"title\">{{'eu-businesscontactus-company-name'|i18n}}</span>\n" +
    "                            <span>{{viewModel.companyInfo.companyName}}</span>\n" +
    "                        </li>\n" +
    "                        <li ng-if=\"viewModel.companyInfo.numberOfCar\">\n" +
    "                            <span class=\"title\">{{'eu-businesscontactus-number-of-car'|i18n}}</span>\n" +
    "                            <span>{{viewModel.companyInfo.numberOfCar}}</span>\n" +
    "                        </li>\n" +
    "                        <li ng-if=\"viewModel.companyInfo.titleName\">\n" +
    "                            <span class=\"title\">{{'eu-businesscontactus-title'|i18n}}</span>\n" +
    "                            <span>{{viewModel.companyInfo.titleName}}</span>\n" +
    "                        </li>\n" +
    "                        <li ng-if=\"viewModel.companyInfo.firstName\">\n" +
    "                            <span class=\"title\">{{'eu-businesscontactus-first-name'|i18n}}</span>\n" +
    "                            <span>{{viewModel.companyInfo.firstName}}</span>\n" +
    "                        </li>\n" +
    "                        <li ng-if=\"viewModel.companyInfo.middleName\">\n" +
    "                            <span class=\"title\">{{'eu-businesscontactus-middle-name'|i18n}}</span>\n" +
    "                            <span>{{viewModel.companyInfo.middleName}}</span>\n" +
    "                        </li>\n" +
    "                        <li ng-if=\"viewModel.companyInfo.lastName\">\n" +
    "                            <span class=\"title\">{{'eu-businesscontactus-last-name'|i18n}}</span>\n" +
    "                            <span>{{viewModel.companyInfo.lastName}}</span>\n" +
    "                        </li>\n" +
    "                        <li ng-if=\"viewModel.companyInfo.jobTitle\">\n" +
    "                            <span class=\"title\">{{'eu-businesscontactus-job-title'|i18n}}</span>\n" +
    "                            <span>{{viewModel.companyInfo.jobTitle}}</span>\n" +
    "                        </li>\n" +
    "                        <li ng-if=\"viewModel.companyInfo.email\">\n" +
    "                            <span class=\"title\">{{'eu-businesscontactus-email'|i18n}}</span>\n" +
    "                            <span>{{viewModel.companyInfo.email}}</span>\n" +
    "                        </li>\n" +
    "                        <li ng-if=\"viewModel.companyInfo.contactNumber\">\n" +
    "                            <span class=\"title\">{{'eu-businesscontactus-placeholder-contact-num-mobile'|i18n}}</span>\n" +
    "                            <span>{{viewModel.companyInfo.contactNumber}}</span>\n" +
    "                        </li>\n" +
    "                        <li ng-if=\"viewModel.companyInfo.contactNumberWork\">\n" +
    "                            <span class=\"title\">{{'eu-businesscontactus-placeholder-contact-num-work'|i18n}}</span>\n" +
    "                            <span>{{viewModel.companyInfo.contactNumberWork}}</span>\n" +
    "                        </li>\n" +
    "                        <li ng-if=\"viewModel.companyInfo.contactNumberHome\">\n" +
    "                            <span class=\"title\">{{'eu-businesscontactus-placeholder-contact-num-home'|i18n}}</span>\n" +
    "                            <span>{{viewModel.companyInfo.contactNumberHome}}</span>\n" +
    "                        </li>\n" +
    "                        <li ng-if=\"viewModel.enquiryInfo.enquiryType == 2\">\n" +
    "                            <span class=\"title\">{{'eu-businesscontactus-test-drive'|i18n}}</span>\n" +
    "                            <span>{{viewModel.enquiryInfo.getAddedCarNames().join( ', ')}}</span>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <dl class=\"eut_more_info\" ng-if=\"!viewModel.formList.hideMoreInfo\">\n" +
    "                <dt class=\"confirm_txt\" ng-if=\"viewModel.formList.stayInTouchWith\">\n" +
    "                    {{'eu-businesscontactus-result-stay'|i18n}}\n" +
    "                </dt>\n" +
    "                <dd>\n" +
    "                    <div ng-if=\"viewModel.formList.stayInTouchWith\" ng-repeat=\"item in viewModel.formList.optInThankYou\">\n" +
    "                        <p class=\"error_message\" ng-show=\"noCheck && !viewModel.moreInfo[ 'optIn'+( $index+3 ) ]\">{{item.error}}</p>\n" +
    "                        <span class=\"eut_form_plugin\" >\n" +
    "                            <input type=\"checkbox\" id=\"more_info_check_{{$index}}\" ng-model=\"viewModel.moreInfo[ 'optIn'+( $index+3 ) ]\" ng-init=\"viewModel.moreInfo[ 'optIn'+( $index+3 ) ] = false\">\n" +
    "                            <label for=\"more_info_check_{{$index}}\" class=\"eut_checkbox\"><span ng-bind-html='item.text'></span></label>\n" +
    "                        </span>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div ng-if=\"viewModel.formList.updateButton\">\n" +
    "                        <button ng-if=\"!isUpdated\" type=\"button\" class=\"eut_cmpe_btn small\" ng-click=\"ctrl.updateMoreInfo()\">{{'eu-update'|i18n}}</button>\n" +
    "                        <button ng-if=\"isUpdated\" type=\"button\" class=\"eut_cmpe_btn small\" disabled=\"disabled\">{{'eu-businesscontactus-update-complete'|i18n}}</button>\n" +
    "                    </div>\n" +
    "\n" +
    "                </dd>\n" +
    "            </dl>\n" +
    "            <div class=\"CTA_Panel\">\n" +
    "                <div ng-if=\"viewModel.formList.viewCTA1\">\n" +
    "                    <h2 class=\"title\">{{ viewModel.formList.cta1Title }}</h2>\n" +
    "					<div class=\"txt_btn\">\n" +
    "                        <a type=\"button\" class=\"eut_cmpe_btn small\" ng-href=\"{{viewModel.formList.cta1Link}}\">{{ viewModel.formList.cta1ButtonText }}</a>\n" +
    "							<p>\n" +
    "                                {{ viewModel.formList.cta1Description }}\n" +
    "                            </p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div ng-if=\"viewModel.formList.viewCTA2\">\n" +
    "                    <h2 class=\"title\">{{ viewModel.formList.cta2Title }}</h2>\n" +
    "                    <div class=\"txt_btn\">\n" +
    "						<a type=\"button\" class=\"eut_cmpe_btn small\" ng-href=\"{{viewModel.formList.cta2Link}}\">{{ viewModel.formList.cta2ButtonText }}</a>\n" +
    "                        <p>\n" +
    "                            {{ viewModel.formList.cta2Description }}\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                    <div ng-if=\"viewModel.formList.viewCTA3\">\n" +
    "                        <h2 class=\"title\">{{ viewModel.formList.cta3Title }}</h2>\n" +
    "                    <div class=\"txt_btn\">\n" +
    "                        <a type=\"button\" class=\"eut_cmpe_btn small\" ng-href=\"{{viewModel.formList.cta3Link}}\">{{ viewModel.formList.cta3ButtonText }}</a>\n" +
    "                        <p>\n" +
    "                            {{ viewModel.formList.cta3Description }}\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
