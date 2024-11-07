/* tslint:disable */
/* eslint-disable */
import type { AxiosStatic } from 'axios'
import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/dist/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/dist/common'
import {
    assignRule,
    assignRules,
    assignSystem,
    assignSystems,
    createPolicy,
    createTailoring,
    deletePolicy,
    deleteReport,
    policies,
    policy,
    policySystems,
    policySystemsOS,
    profile,
    profileRule,
    profileRules,
    profileTree,
    profiles,
    report,
    reportRuleResults,
    reportStats,
    reportSystem,
    reportSystems,
    reportSystemsOS,
    reportTestResult,
    reportTestResults,
    reportTestResultsOS,
    reports,
    reportsOS,
    rule,
    ruleGroup,
    ruleGroups,
    rules,
    securityGuide,
    securityGuideRuleTree,
    securityGuides,
    securityGuidesOS,
    supportedProfiles,
    system,
    systemReports,
    systems,
    systemsOS,
    systemsPolicies,
    tailoring,
    tailoringFile,
    tailoringRuleTree,
    tailoringRules,
    tailorings,
    unassignRule,
    unassignSystem,
    updatePolicy,
    updateTailoring,
    valueDefinition,
    valueDefinitions,

  } from './index';

export const ComplianceClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory(BASE_PATH, {
    assignRule,
    assignRules,
    assignSystem,
    assignSystems,
    createPolicy,
    createTailoring,
    deletePolicy,
    deleteReport,
    policies,
    policy,
    policySystems,
    policySystemsOS,
    profile,
    profileRule,
    profileRules,
    profileTree,
    profiles,
    report,
    reportRuleResults,
    reportStats,
    reportSystem,
    reportSystems,
    reportSystemsOS,
    reportTestResult,
    reportTestResults,
    reportTestResultsOS,
    reports,
    reportsOS,
    rule,
    ruleGroup,
    ruleGroups,
    rules,
    securityGuide,
    securityGuideRuleTree,
    securityGuides,
    securityGuidesOS,
    supportedProfiles,
    system,
    systemReports,
    systems,
    systemsOS,
    systemsPolicies,
    tailoring,
    tailoringFile,
    tailoringRuleTree,
    tailoringRules,
    tailorings,
    unassignRule,
    unassignSystem,
    updatePolicy,
    updateTailoring,
    valueDefinition,
    valueDefinitions,

  },
  instance);
}

export default ComplianceClient;
