import {
  getOperavaultModuleBySlug,
  operavaultModules
} from "@/modules/product/operavault-product";

export type OperavaultFeature = (typeof operavaultModules)[number];

export const operavaultFeatures = operavaultModules;

export const getOperavaultFeatureBySlug = getOperavaultModuleBySlug;

