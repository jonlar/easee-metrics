import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const Easee_AccessControl_Models_LoginDto = z
  .object({ userName: z.string().nullable(), password: z.string().nullable() })
  .partial();
const Easee_UserAdministration_DTO_UserToken = z
  .object({
    accessToken: z.string().nullable(),
    expiresIn: z.number().int(),
    accessClaims: z.array(z.union([z.string(), z.unknown()])).nullable(),
    tokenType: z.string().nullable(),
    refreshToken: z.string().nullable(),
  })
  .partial();
const Easee_AccessControl_Models_RefreshTokenDTO = z
  .object({ accessToken: z.string().nullable(), refreshToken: z.string().nullable() })
  .partial();
const Easee_Core_DTOs_Account_ProfileDTO = z
  .object({
    userId: z.number().int(),
    eMail: z.string().nullable(),
    phoneNo: z.string().nullable(),
    firstName: z.string().nullable(),
    lastName: z.string().nullable(),
    street: z.string().nullable(),
    zipCode: z.string().nullable(),
    city: z.string().nullable(),
    country: z.string().nullable(),
    countryId: z.string().nullable(),
    language: z.string().nullable(),
    emailVerified: z.boolean(),
    subscribeNewProductUpdate: z.boolean().nullable(),
    subscribeProductUpdate: z.boolean().nullable(),
    company: z.string().nullable(),
    isActive: z.boolean(),
  })
  .partial();
const Microsoft_AspNetCore_Mvc_ProblemDetails = z
  .object({
    type: z.string().nullable(),
    title: z.string().nullable(),
    status: z.number().int().nullable(),
    detail: z.string().nullable(),
    instance: z.string().nullable(),
  })
  .partial()
  .passthrough();
const Easee_Core_Enums_LevelOfAccess = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(1),
  z.literal(2),
  z.literal(3),
]);
const Easee_AccessControl_Domain_Entities_CountryDTO = z
  .object({ id: z.string().nullable(), name: z.string().nullable(), phonePrefix: z.number().int() })
  .partial();
const Easee_AccessControl_Domain_DTO_AddressDTO = z
  .object({
    street: z.string().nullable(),
    buildingNumber: z.string().nullable(),
    zip: z.string().nullable(),
    area: z.string().nullable(),
    country: Easee_AccessControl_Domain_Entities_CountryDTO,
    latitude: z.number().nullable(),
    longitude: z.number().nullable(),
    altitude: z.number().nullable(),
  })
  .partial();
const Easee_Core_Constants_SiteType = z.union([z.literal(1), z.literal(100)]);
const Easee_Core_Enums_SiteUserRole = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(20),
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(20),
]);
const Easee_Core_Constants_ProductType = z.union([
  z.literal(1),
  z.literal(100),
  z.literal(400),
  z.literal(1000),
  z.literal(1),
  z.literal(100),
  z.literal(400),
  z.literal(1000),
]);
const Easee_Core_DTOs_MyProducts_BackPlateDTO = z
  .object({ id: z.string().nullable(), masterBackPlateId: z.string().nullable(), name: z.string().nullable() })
  .partial();
const Easee_Core_Enums_ChargerColorType = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
]);
const Easee_AccessControl_Domain_DTO_ChargerDTO = z
  .object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    levelOfAccess: Easee_Core_Enums_LevelOfAccess,
    userRole: Easee_Core_Enums_SiteUserRole,
    productCode: Easee_Core_Constants_ProductType,
    backPlate: Easee_Core_DTOs_MyProducts_BackPlateDTO,
    isTemporary: z.boolean(),
    color: Easee_Core_Enums_ChargerColorType,
    createdOn: z.string().datetime({ offset: true }),
    updatedOn: z.string().datetime({ offset: true }),
  })
  .partial();
const Easee_AccessControl_Domain_DTO_CircuitDTO = z
  .object({
    id: z.number().int(),
    siteId: z.number().int(),
    circuitPanelId: z.number().int(),
    panelName: z.string().nullable(),
    ratedCurrent: z.number(),
    chargers: z.array(Easee_AccessControl_Domain_DTO_ChargerDTO).nullable(),
    masterBackplate: Easee_Core_DTOs_MyProducts_BackPlateDTO,
    useDynamicMaster: z.boolean(),
    parentCircuitId: z.number().int().nullable(),
  })
  .partial();
const Easee_Core_DTOs_MyProducts_EqualizerDTO = z
  .object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    siteId: z.number().int().nullable(),
    circuitId: z.number().int().nullable(),
  })
  .partial();
const Easee_AccessControl_Domain_DTO_SiteDTO = z
  .object({
    id: z.number().int(),
    siteKey: z.string().nullable(),
    name: z.string().nullable(),
    levelOfAccess: Easee_Core_Enums_LevelOfAccess,
    address: Easee_AccessControl_Domain_DTO_AddressDTO,
    siteType: Easee_Core_Constants_SiteType,
    ratedCurrent: z.number(),
    partnerId: z.number().int().nullable(),
    circuits: z.array(Easee_AccessControl_Domain_DTO_CircuitDTO).nullable(),
    equalizers: z.array(Easee_Core_DTOs_MyProducts_EqualizerDTO).nullable(),
    userRole: Easee_Core_Enums_SiteUserRole,
    allowedSiteActions: z.array(z.string()).nullable(),
  })
  .partial();
const Easee_AccessControl_Models_PairChargerPartnerDTO = z.object({ id: z.number().int() }).partial();
const Easee_AccessControl_Models_PartnerDetailedDTO = z
  .object({
    id: z.number().int(),
    name: z.string().nullable(),
    short: z.string().nullable(),
    long: z.string().nullable(),
    bigImage: z.string().nullable(),
    smallImage: z.string().nullable(),
    accountId: z.number().int(),
    createdOn: z.string().datetime({ offset: true }),
    smartButtonEnabled: z.boolean(),
    authorizationRequired: z.boolean(),
    remoteStartRequired: z.boolean(),
    localPreAuthorizeEnabled: z.boolean(),
    localAuthorizeOfflineEnabled: z.boolean(),
    allowOfflineTxForUnknownId: z.boolean(),
    offlineChargingMode: z.number().int(),
    isOperator: z.boolean(),
    isInstaller: z.boolean(),
    hasAuthManagementSystem: z.boolean(),
    useOcppIntegration: z.boolean(),
    useAmqpIntegration: z.boolean(),
    isTest: z.boolean(),
    inProduction: z.boolean(),
    authorizeChargingWithEasee: z.boolean(),
    subscriptionKey: z.string().nullable(),
    isEasee: z.boolean(),
  })
  .partial();
const Easee_AccessControl_Models_ChargerPermissionRequestDTO = z.object({ phoneNo: z.string().nullable() }).partial();
const Easee_AccessControl_Domain_DTO_UserChargerDTO = z
  .object({
    userId: z.number().int(),
    name: z.string().nullable(),
    phoneNumber: z.string().nullable(),
    email: z.string().nullable(),
  })
  .partial();
const Easee_AccessControl_Models_SiteOwnerDTO = z.object({ userId: z.number().int() }).partial();
const Easee_Partners_Domain_Entities_PartnerSiteGroup = z
  .object({ id: z.number().int(), name: z.string().nullable(), partnerId: z.number().int() })
  .partial();
const Easee_UserAdministration_Domain_DTO_SiteUserDTO = z
  .object({
    userId: z.number().int(),
    email: z.string().nullable(),
    name: z.string().nullable(),
    phoneNumber: z.string().nullable(),
    userRole: Easee_Core_Enums_SiteUserRole,
  })
  .partial();
const Easee_UserAdministration_Domain_DTO_SitePermissionDTO = z
  .object({ isOwner: z.boolean(), siteUsers: z.array(Easee_UserAdministration_Domain_DTO_SiteUserDTO).nullable() })
  .partial();
const Easee_UserAdministration_Domain_DTO_BasicProfile = z
  .object({
    userId: z.number().int(),
    eMail: z.string().nullable(),
    phoneNo: z.string().nullable(),
    fullName: z.string().nullable(),
  })
  .partial();
const Easee_AccessControl_Models_SitePermissionRequestDTO = z
  .object({ phoneNo: z.string().nullable(), siteUserRole: Easee_Core_Enums_SiteUserRole })
  .partial();
const Easee_Core_DTOs_Site_UpdateSitePermissionRequestDTO = z
  .object({ siteUserRole: Easee_Core_Enums_SiteUserRole, userId: z.number().int() })
  .partial();
const Easee_Core_DTOs_Site_ChargerAccessDTO = z
  .object({ chargerId: z.string().nullable(), levelOfAccess: Easee_Core_Enums_LevelOfAccess })
  .partial();
const Easee_Core_DTOs_Charger_BasicChargerDTO = z
  .object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    color: Easee_Core_Enums_ChargerColorType,
    createdOn: z.string().datetime({ offset: true }),
    updatedOn: z.string().datetime({ offset: true }),
    levelOfAccess: Easee_Core_Enums_LevelOfAccess,
    productCode: Easee_Core_Constants_ProductType,
  })
  .partial();
const Easee_Core_Enums_BackPlateFeature = z.union([z.literal(0), z.literal(1)]);
const Easee_Core_DTOs_Charger_BackPlateDTO = z
  .object({
    id: z.string().nullable(),
    masterBackPlateId: z.string().nullable(),
    name: z.string().nullable(),
    circuitId: z.number().int().nullable(),
    features: z.array(Easee_Core_Enums_BackPlateFeature).nullable(),
  })
  .partial();
const Easee_Core_DTOs_Charger_ChargerDTO = z
  .object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    color: Easee_Core_Enums_ChargerColorType,
    createdOn: z.string().datetime({ offset: true }),
    updatedOn: z.string().datetime({ offset: true }),
    backPlate: Easee_Core_DTOs_Charger_BackPlateDTO,
    levelOfAccess: Easee_Core_Enums_LevelOfAccess,
    productCode: Easee_Core_Constants_ProductType,
  })
  .partial();
const Easee_Core_DTOs_Partners_PartnerDTO = z
  .object({
    id: z.number().int(),
    name: z.string().nullable(),
    short: z.string().nullable(),
    long: z.string().nullable(),
    bigImage: z.string().nullable(),
    smallImage: z.string().nullable(),
  })
  .partial();
const Easee_Core_DTOs_Charger_ChargerInfoDTO = z
  .object({
    serialNumber: z.string().nullable(),
    pinCode: z.string().nullable(),
    product: z.string().nullable(),
    unitType: z.string().nullable(),
    levelOfAccess: Easee_Core_Enums_LevelOfAccess,
    partner: Easee_Core_DTOs_Partners_PartnerDTO,
  })
  .partial();
const Easee_SiteStructure_Domain_Entities_Enums_LevelOfAccess = z.union([z.literal(1), z.literal(2), z.literal(3)]);
const Easee_SiteStructure_Domain_Ports_CountryDTO = z
  .object({ id: z.string().nullable(), name: z.string().nullable(), phonePrefix: z.number().int() })
  .partial();
const Easee_SiteStructure_Domain_Ports_AddressDTO = z
  .object({
    street: z.string().nullable(),
    buildingNumber: z.string().nullable(),
    zip: z.string().nullable(),
    area: z.string().nullable(),
    country: Easee_SiteStructure_Domain_Ports_CountryDTO,
    latitude: z.number().nullable(),
    longitude: z.number().nullable(),
    altitude: z.number().nullable(),
  })
  .partial();
const Easee_SiteStructure_Domain_Ports_ContactInfoDTO = z
  .object({
    installerName: z.string().nullable(),
    installerPhoneNumber: z.string().nullable(),
    ownerName: z.string().nullable(),
    ownerPhoneNumber: z.string().nullable(),
    company: z.string().nullable(),
  })
  .partial();
const Easee_SiteStructure_Domain_Entities_Enums_ProductType = z.union([z.literal(1), z.literal(100), z.literal(1000)]);
const Easee_SiteStructure_Domain_Entities_Enums_ChargerColorType = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
]);
const Easee_SiteStructure_Domain_Entities_Enums_BackPlateFeature = z.union([z.literal(0), z.literal(1)]);
const Easee_SiteStructure_Domain_Ports_BackPlateDto = z
  .object({
    id: z.string().nullable(),
    masterBackPlateId: z.string().nullable(),
    name: z.string().nullable(),
    features: z.array(Easee_SiteStructure_Domain_Entities_Enums_BackPlateFeature).nullable(),
  })
  .partial();
const Easee_SiteStructure_Domain_Entities_Enums_SiteUserRole = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(20),
]);
const Easee_SiteStructure_Domain_Ports_ChargerDTO = z
  .object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    color: Easee_SiteStructure_Domain_Entities_Enums_ChargerColorType,
    createdOn: z.string().datetime({ offset: true }),
    updatedOn: z.string().datetime({ offset: true }),
    backPlate: Easee_SiteStructure_Domain_Ports_BackPlateDto,
    levelOfAccess: Easee_SiteStructure_Domain_Entities_Enums_LevelOfAccess,
    productCode: Easee_SiteStructure_Domain_Entities_Enums_ProductType,
    userRole: Easee_SiteStructure_Domain_Entities_Enums_SiteUserRole,
    isTemporary: z.boolean(),
  })
  .partial();
const Easee_SiteStructure_Domain_Ports_CircuitDTO = z
  .object({
    id: z.number().int(),
    siteId: z.number().int(),
    circuitPanelId: z.number().int(),
    panelName: z.string().nullable(),
    ratedCurrent: z.number(),
    chargers: z.array(Easee_SiteStructure_Domain_Ports_ChargerDTO).nullable(),
    masterBackplate: Easee_SiteStructure_Domain_Ports_BackPlateDto,
    useDynamicMaster: z.boolean(),
    parentCircuitId: z.number().int().nullable(),
  })
  .partial();
const Easee_SiteStructure_Domain_Ports_EqualizerDTO = z
  .object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    siteId: z.number().int().nullable(),
    circuitId: z.number().int().nullable(),
  })
  .partial();
const Easee_SiteStructure_Domain_Ports_SiteDTO = z
  .object({
    id: z.number().int(),
    siteKey: z.string().nullable(),
    name: z.string().nullable(),
    levelOfAccess: Easee_SiteStructure_Domain_Entities_Enums_LevelOfAccess,
    address: Easee_SiteStructure_Domain_Ports_AddressDTO,
    contactInfo: Easee_SiteStructure_Domain_Ports_ContactInfoDTO,
    costPerKWh: z.number().nullable(),
    costPerKwhExcludeVat: z.number(),
    currencyId: z.string().nullable(),
    siteType: Easee_SiteStructure_Domain_Entities_Enums_ProductType,
    ratedCurrent: z.number(),
    vat: z.number().nullable(),
    partnerId: z.number().int().nullable(),
    installerId: z.number().int().nullable(),
    useDynamicMaster: z.boolean(),
    circuits: z.array(Easee_SiteStructure_Domain_Ports_CircuitDTO).nullable(),
    equalizers: z.array(Easee_SiteStructure_Domain_Ports_EqualizerDTO).nullable(),
    createdOn: z.string().datetime({ offset: true }),
    updatedOn: z.string().datetime({ offset: true }),
    userRole: Easee_SiteStructure_Domain_Entities_Enums_SiteUserRole,
    allowedSiteActions: z.array(z.string()).nullable(),
  })
  .partial();
const PowerGridType = z.union([
  z.literal(0),
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
  z.literal(30),
  z.literal(31),
  z.literal(50),
  z.literal(51),
  z.literal(52),
]);
const Easee_Core_Enums_OfflineChargingModeType = z.union([z.literal(0), z.literal(1), z.literal(2)]);
const Easee_Core_Enums_PhaseMode = z.union([z.literal(1), z.literal(2), z.literal(3)]);
const Easee_Core_Enums_NodeType = z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]);
const Easee_Core_DTOs_Charger_ChargerConfigurationDTO = z
  .object({
    isEnabled: z.boolean().nullable(),
    lockCablePermanently: z.boolean().nullable(),
    authorizationRequired: z.boolean().nullable(),
    remoteStartRequired: z.boolean().nullable(),
    smartButtonEnabled: z.boolean().nullable(),
    wiFiSSID: z.string().nullable(),
    detectedPowerGridType: PowerGridType,
    offlineChargingMode: Easee_Core_Enums_OfflineChargingModeType,
    circuitMaxCurrentP1: z.number().nullable(),
    circuitMaxCurrentP2: z.number().nullable(),
    circuitMaxCurrentP3: z.number().nullable(),
    enableIdleCurrent: z.boolean().nullable(),
    limitToSinglePhaseCharging: z.boolean().nullable(),
    phaseMode: Easee_Core_Enums_PhaseMode,
    localNodeType: Easee_Core_Enums_NodeType,
    localAuthorizationRequired: z.boolean().nullable(),
    localRadioChannel: z.number().int().nullable(),
    localShortAddress: z.number().int().nullable(),
    localParentAddrOrNumOfNodes: z.number().int().nullable(),
    localPreAuthorizeEnabled: z.boolean().nullable(),
    localAuthorizeOfflineEnabled: z.boolean().nullable(),
    allowOfflineTxForUnknownId: z.boolean().nullable(),
    maxChargerCurrent: z.number().nullable(),
    ledStripBrightness: z.number().int().nullable(),
    chargingSchedule: z.string().nullable(),
  })
  .partial();
const Easee_Core_DTOs_Session_AggregatedUsageDTO = z
  .object({
    from: z.string().datetime({ offset: true }),
    to: z.string().datetime({ offset: true }),
    totalEnergy: z.number(),
  })
  .partial();
const Easee_Core_DTOs_Charger_CommentDTO = z
  .object({
    user: z.string().nullable(),
    comment: z.string().nullable(),
    createdOn: z.string().datetime({ offset: true }),
  })
  .partial();
const Easee_Core_DTOs_Charger_ChargePlanDTO = z
  .object({
    id: z.string().nullable(),
    chargeStartTime: z.string().datetime({ offset: true }),
    chargeStopTime: z.string().datetime({ offset: true }).nullable(),
    repeat: z.boolean(),
    isEnabled: z.boolean().nullable(),
    chargingCurrentLimit: z.number().int().gte(0).lte(32).default(32),
  })
  .partial();
const Easee_Core_Enums_ChargeScheduleTag = z.literal(0);
const Easee_Core_Enums_EuropeanDayOfWeek = z.union([
  z.literal(0),
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
  z.literal(6),
]);
const Easee_Core_DTOs_Schedule_WeeklyChargeScheduleRangeDTO = z
  .object({
    startTime: z.string().nullable(),
    stopTime: z.string().nullable(),
    chargingCurrentLimit: z.number().int().gte(0).lte(32).default(32),
  })
  .partial();
const Easee_Core_DTOs_Schedule_WeeklyChargeScheduleDateDTO = z
  .object({
    dayOfWeek: Easee_Core_Enums_EuropeanDayOfWeek,
    ranges: z.array(Easee_Core_DTOs_Schedule_WeeklyChargeScheduleRangeDTO).nullable(),
  })
  .partial();
const Easee_Core_DTOs_Schedule_WeeklyChargeScheduleResponseDTO = z
  .object({
    isEnabled: z.boolean(),
    tags: z.array(Easee_Core_Enums_ChargeScheduleTag).nullable(),
    days: z.array(Easee_Core_DTOs_Schedule_WeeklyChargeScheduleDateDTO).nullable(),
  })
  .partial();
const Easee_Core_DTOs_Schedule_WeeklyChargeScheduleRequestDTO = z
  .object({ isEnabled: z.boolean(), days: z.array(Easee_Core_DTOs_Schedule_WeeklyChargeScheduleDateDTO).nullable() })
  .partial();
const Easee_Core_DTOs_Schedule_ScheduleFeatureRequestDto = z
  .object({ features: z.array(Easee_Core_Enums_BackPlateFeature).nullable() })
  .partial();
const Easee_Core_DTOs_Charger_ChargerSettingDTO = z
  .object({
    enabled: z.boolean().nullable(),
    enableIdleCurrent: z.boolean().nullable(),
    limitToSinglePhaseCharging: z.boolean().nullable(),
    lockCablePermanently: z.boolean().nullable(),
    smartButtonEnabled: z.boolean().nullable(),
    phaseMode: z.number().int().nullable(),
    smartCharging: z.boolean().nullable(),
    localPreAuthorizeEnabled: z.boolean().nullable(),
    localAuthorizeOfflineEnabled: z.boolean().nullable(),
    allowOfflineTxForUnknownId: z.boolean().nullable(),
    offlineChargingMode: z.number().int().nullable(),
    authorizationRequired: z.boolean().nullable(),
    remoteStartRequired: z.boolean().nullable(),
    ledStripBrightness: z.number().int().nullable(),
    maxChargerCurrent: z.number().nullable(),
    dynamicChargerCurrent: z.number().nullable(),
  })
  .partial();
const Easee_Core_DTOs_Charger_LockStateDTO = z.object({ state: z.boolean() }).partial();
const Easee_Core_DTOs_Charger_ScanWifiSettingDTO = z.object({ timeout: z.number().int().nullable() }).partial();
const Easee_Core_DTOs_Charger_WifiConfigDTO = z
  .object({ ssid: z.string().nullable(), password: z.string().nullable() })
  .partial();
const Easee_Core_DTOs_Charger_PairRFIDSettingsDTO = z.object({ timeout: z.number().int() }).partial();
const Easee_Core_DTOs_Charger_UsageStatisticsDTO = z
  .object({
    chargerId: z.string().nullable(),
    sessionEnergy: z.number(),
    sessionStart: z.string().datetime({ offset: true }).nullable(),
    sessionEnd: z.string().datetime({ offset: true }).nullable(),
    sessionId: z.number().int().nullable(),
    chargeDurationInSeconds: z.number().int().nullable(),
    firstEnergyTransferPeriodStart: z.string().datetime({ offset: true }).nullable(),
    lastEnergyTransferPeriodEnd: z.string().datetime({ offset: true }).nullable(),
    pricePrKwhIncludingVat: z.number().nullable(),
    pricePerKwhExcludingVat: z.number().nullable(),
    vatPercentage: z.number().nullable(),
    currencyId: z.string().nullable(),
    costIncludingVat: z.number().nullable(),
    costExcludingVat: z.number().nullable(),
  })
  .partial();
const Easee_Core_DTOs_Session_ChargeSessionDTO = z
  .object({
    carConnected: z.string().datetime({ offset: true }).nullable(),
    carDisconnected: z.string().datetime({ offset: true }).nullable(),
    kiloWattHours: z.number(),
    pricePerKwhExcludingVat: z.number(),
    pricePrKwhIncludingVat: z.number(),
    costExcludingVat: z.number(),
    costIncludingVat: z.number(),
    vatPercentage: z.number().nullable(),
    currency: z.string().nullable(),
    actualDurationSeconds: z.number().int().nullable(),
    firstEnergyTransferPeriodStarted: z.string().datetime({ offset: true }).nullable(),
    lastEnergyTransferPeriodEnd: z.string().datetime({ offset: true }).nullable(),
    id: z.number().int(),
  })
  .partial();
const Easee_Core_DTOs_Session_AuthorizationTokenEnergy = z
  .object({ rfidKey: z.string().nullable(), energy: z.number() })
  .partial();
const Easee_Core_DTOs_Session_YearlySummaryDTO = z
  .object({
    year: z.number().int(),
    totalEnergyUsage: z.number(),
    totalCost: z.number(),
    currencyId: z.string().nullable(),
    authTokensUsage: z.array(Easee_Core_DTOs_Session_AuthorizationTokenEnergy).nullable(),
  })
  .partial();
const Easee_Core_DTOs_Session_MonthlySummaryDTO = z
  .object({
    year: z.number().int(),
    month: z.number().int(),
    totalEnergyUsage: z.number(),
    totalCost: z.number(),
    currencyId: z.string().nullable(),
    authTokensUsage: z.array(Easee_Core_DTOs_Session_AuthorizationTokenEnergy).nullable(),
  })
  .partial();
const Easee_Core_DTOs_Session_WeeklySummaryDTO = z
  .object({
    year: z.number().int(),
    month: z.number().int(),
    weekOfYear: z.number().int(),
    totalEnergyUsage: z.number(),
    totalCost: z.number(),
    currencyId: z.string().nullable(),
    authTokensUsage: z.array(Easee_Core_DTOs_Session_AuthorizationTokenEnergy).nullable(),
  })
  .partial();
const Easee_Core_DTOs_Session_ChargingSessionDetailDTO = z
  .object({
    chargerId: z.string().nullable(),
    chargerName: z.string().nullable(),
    totalEnergyUsage: z.number(),
    totalCost: z.number(),
    currencyId: z.string().nullable(),
  })
  .partial();
const Easee_Core_DTOs_Session_DailySummaryDTO = z
  .object({
    year: z.number().int(),
    month: z.number().int(),
    totalEnergyUsage: z.number(),
    totalCost: z.number(),
    currencyId: z.string().nullable(),
    authTokensUsage: z.array(Easee_Core_DTOs_Session_AuthorizationTokenEnergy).nullable(),
    dayOfMonth: z.number().int(),
  })
  .partial();
const Easee_Core_DTOs_Session_HourlySummaryDTO = z
  .object({
    year: z.number().int(),
    month: z.number().int(),
    totalEnergyUsage: z.number(),
    totalCost: z.number(),
    currencyId: z.string().nullable(),
    authTokensUsage: z.array(Easee_Core_DTOs_Session_AuthorizationTokenEnergy).nullable(),
    dayOfMonth: z.number().int(),
    hourOfDay: z.number().int(),
  })
  .partial();
const Easee_BusinessLayer_Managers_TotalConsumption_Period = z
  .object({ year: z.number().int(), month: z.number().int().nullable(), day: z.number().int().nullable() })
  .partial();
const Easee_BusinessLayer_Managers_TotalConsumption_ChargerConsumption = z
  .object({ chargerId: z.string().nullable(), consumption: z.number() })
  .partial();
const Easee_BusinessLayer_Managers_TotalConsumption_SiteConsumption = z
  .object({
    siteId: z.number().int(),
    chargerConsumption: z.array(Easee_BusinessLayer_Managers_TotalConsumption_ChargerConsumption).nullable(),
  })
  .partial();
const Easee_BusinessLayer_Managers_TotalConsumption_TotalConsumptionPeriod = z
  .object({
    period: Easee_BusinessLayer_Managers_TotalConsumption_Period,
    mySitesConsumption: z.array(Easee_BusinessLayer_Managers_TotalConsumption_SiteConsumption).nullable(),
    urbanCharging: z.number(),
  })
  .partial();
const Easee_Core_DTOs_Equalizer_EqualizerDTO = z
  .object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    siteId: z.number().int().nullable(),
    circuitId: z.number().int().nullable(),
  })
  .partial();
const Easee_Core_DTOs_Equalizer_DetailedEqualizerDTO = z
  .object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    siteId: z.number().int().nullable(),
    circuitId: z.number().int().nullable(),
    pinCode: z.string().nullable(),
  })
  .partial();
const Easee_Core_Enums_ExternalMeterType = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
]);
const Easee_Core_Enums_GridType = z.union([z.literal(0), z.literal(1), z.literal(2)]);
const Easee_Core_DTOs_Equalizer_ChildDTO = z
  .object({ scid: z.string().nullable(), fuse: z.number().int(), cid: z.number().int(), oflc: z.number().int() })
  .partial();
const Easee_Core_DTOs_Equalizer_ChildReportDTO = z
  .object({ modified: z.boolean().nullable(), children: z.array(Easee_Core_DTOs_Equalizer_ChildDTO).nullable() })
  .partial();
const Easee_Core_Enums_DeviceMode = z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(4)]);
const Easee_Core_DTOs_Equalizer_DeviceModeDTO = z
  .object({ activeMode: Easee_Core_Enums_DeviceMode, configuredMode: Easee_Core_Enums_DeviceMode })
  .partial();
const Easee_Core_DTOs_Equalizer_EqualizerConfigurationDTO = z
  .object({
    ssid: z.string().nullable(),
    equalizerId: z.string().nullable(),
    masterBackPlateId: z.string().nullable(),
    siteStructure: z.string().nullable(),
    meterId: z.string().nullable(),
    meterType: z.string().nullable(),
    externalMeterType: Easee_Core_Enums_ExternalMeterType,
    gridType: Easee_Core_Enums_GridType,
    numPhases: z.number().int().nullable(),
    maxAllocatedCurrent: z.number().int().nullable(),
    childReport: Easee_Core_DTOs_Equalizer_ChildReportDTO,
    deviceMode: Easee_Core_DTOs_Equalizer_DeviceModeDTO,
  })
  .partial();
const Easee_Core_DTOs_Site_CountryDTO = z
  .object({ id: z.string().nullable(), name: z.string().nullable(), phonePrefix: z.number().int() })
  .partial();
const Easee_Core_DTOs_Site_AddressDTO = z
  .object({
    street: z.string().nullable(),
    buildingNumber: z.string().nullable(),
    zip: z.string().nullable(),
    area: z.string().nullable(),
    country: Easee_Core_DTOs_Site_CountryDTO,
    latitude: z.number().nullable(),
    longitude: z.number().nullable(),
    altitude: z.number().nullable(),
  })
  .partial();
const Easee_Core_DTOs_Site_ContactInfoDTO = z
  .object({
    installerName: z.string().nullable(),
    installerPhoneNumber: z.string().nullable(),
    ownerName: z.string().nullable(),
    ownerPhoneNumber: z.string().nullable(),
    company: z.string().nullable(),
  })
  .partial();
const Easee_Core_DTOs_Charger_DetailChargerDTO = z
  .object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    color: Easee_Core_Enums_ChargerColorType,
    createdOn: z.string().datetime({ offset: true }),
    updatedOn: z.string().datetime({ offset: true }),
    backPlate: Easee_Core_DTOs_Charger_BackPlateDTO,
    levelOfAccess: Easee_Core_Enums_LevelOfAccess,
    productCode: Easee_Core_Constants_ProductType,
    userRole: Easee_Core_Enums_SiteUserRole,
    isTemporary: z.boolean(),
  })
  .partial();
const Easee_Core_DTOs_Site_CircuitDTO = z
  .object({
    id: z.number().int(),
    siteId: z.number().int(),
    circuitPanelId: z.number().int(),
    panelName: z.string().nullable(),
    ratedCurrent: z.number(),
    chargers: z.array(Easee_Core_DTOs_Charger_DetailChargerDTO).nullable(),
    masterBackplate: Easee_Core_DTOs_Charger_BackPlateDTO,
    useDynamicMaster: z.boolean(),
    parentCircuitId: z.number().int().nullable(),
  })
  .partial();
const Easee_Core_DTOs_Site_SiteDTO = z
  .object({
    id: z.number().int(),
    siteKey: z.string().nullable(),
    name: z.string().nullable(),
    levelOfAccess: Easee_Core_Enums_LevelOfAccess,
    address: Easee_Core_DTOs_Site_AddressDTO,
    contactInfo: Easee_Core_DTOs_Site_ContactInfoDTO,
    costPerKWh: z.number().nullable(),
    costPerKwhExcludeVat: z.number(),
    vat: z.number().nullable(),
    currencyId: z.string().nullable(),
    siteType: Easee_Core_Constants_ProductType,
    ratedCurrent: z.number(),
    partnerId: z.number().int().nullable(),
    ownerPartnerId: z.number().int().nullable(),
    installerId: z.number().int().nullable(),
    useDynamicMaster: z.boolean(),
    circuits: z.array(Easee_Core_DTOs_Site_CircuitDTO).nullable(),
    equalizers: z.array(Easee_Core_DTOs_Equalizer_EqualizerDTO).nullable(),
    createdOn: z.string().datetime({ offset: true }),
    updatedOn: z.string().datetime({ offset: true }),
  })
  .partial();
const Easee_Core_DTOs_Equalizer_MeterSettingsDTO = z
  .object({ deviceMode: Easee_Core_Enums_DeviceMode, externalMeterType: Easee_Core_Enums_ExternalMeterType })
  .partial();
const Easee_Core_DTOs_Equalizer_MaxAllocatedCurrentDTO = z.object({ maxCurrent: z.number().int() }).partial();
const Easee_Services_LifetimeEnergyReporting_Measurement = z
  .object({ value: z.number(), measuredAt: z.string().datetime({ offset: true }) })
  .partial();
const Easee_Services_LifetimeEnergyReporting_GetAllMeasurementsResponse = z
  .object({ measurements: z.array(Easee_Services_LifetimeEnergyReporting_Measurement).nullable() })
  .partial();
const Easee_Services_LifetimeEnergyReporting_AggregatedLifetimeEnergy = z
  .object({
    year: z.number().int(),
    month: z.number().int().nullable(),
    day: z.number().int().nullable(),
    hour: z.number().int().nullable(),
    consumption: z.number(),
    date: z.string().datetime({ offset: true }),
  })
  .partial();
const Easee_Services_LifetimeEnergyReporting_LifetimeEnergyMeasurementSettingsRequest = z
  .object({ intervalInMinutes: z.number().int(), alsoSendWhenNotCharging: z.boolean() })
  .partial();
const Easee_Core_Models_Site_Currency = z
  .object({ id: z.string().nullable(), name: z.string().nullable(), countryId: z.string().nullable() })
  .partial();
const Masterloop_Core_Types_Base_DataType = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
  z.literal(6),
  z.literal(7),
]);
const Easee_Core_DTOs_Charger_ObservationPropertyDTO = z
  .object({
    observationId: z.number().int(),
    name: z.string().nullable(),
    dataType: Masterloop_Core_Types_Base_DataType,
  })
  .partial();
const Easee_Core_DTOs_Site_BasicSiteDTO = z
  .object({
    id: z.number().int(),
    siteKey: z.string().nullable(),
    name: z.string().nullable(),
    levelOfAccess: Easee_Core_Enums_LevelOfAccess,
    address: Easee_Core_DTOs_Site_AddressDTO,
  })
  .partial();
const Easee_Core_DTOs_Site_DetailSiteDTO = z
  .object({
    id: z.number().int(),
    siteKey: z.string().nullable(),
    name: z.string().nullable(),
    levelOfAccess: Easee_Core_Enums_LevelOfAccess,
    address: Easee_Core_DTOs_Site_AddressDTO,
    contactInfo: Easee_Core_DTOs_Site_ContactInfoDTO,
    costPerKWh: z.number().nullable(),
    costPerKwhExcludeVat: z.number(),
    vat: z.number().nullable(),
    currencyId: z.string().nullable(),
    siteType: Easee_Core_Constants_ProductType,
    ratedCurrent: z.number(),
    partnerId: z.number().int().nullable(),
    ownerPartnerId: z.number().int().nullable(),
    installerId: z.number().int().nullable(),
    useDynamicMaster: z.boolean(),
    circuits: z.array(Easee_Core_DTOs_Site_CircuitDTO).nullable(),
    equalizers: z.array(Easee_Core_DTOs_Equalizer_EqualizerDTO).nullable(),
    createdOn: z.string().datetime({ offset: true }),
    updatedOn: z.string().datetime({ offset: true }),
    userRole: Easee_Core_Enums_SiteUserRole,
  })
  .partial();
const Microsoft_AspNetCore_JsonPatch_Operations_OperationType = z.union([
  z.literal(0),
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
  z.literal(6),
]);
const Microsoft_AspNetCore_JsonPatch_Operations_Operation = z
  .object({
    operationType: Microsoft_AspNetCore_JsonPatch_Operations_OperationType,
    path: z.string().nullable(),
    op: z.string().nullable(),
    from: z.string().nullable(),
    value: z.unknown().nullable(),
  })
  .partial();
const Easee_Core_Enums_OpModeType = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
  z.literal(6),
]);
const Easee_Core_Enums_OutputPhaseType = z.union([
  z.literal(0),
  z.literal(10),
  z.literal(11),
  z.literal(12),
  z.literal(13),
  z.literal(14),
  z.literal(15),
  z.literal(20),
  z.literal(21),
  z.literal(22),
  z.literal(30),
]);
const Easee_Core_Enums_ChargerLEDModeType = z.union([
  z.literal(0),
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
  z.literal(6),
  z.literal(7),
  z.literal(8),
  z.literal(9),
  z.literal(10),
  z.literal(11),
  z.literal(12),
  z.literal(13),
  z.literal(14),
  z.literal(15),
  z.literal(16),
  z.literal(17),
  z.literal(18),
  z.literal(19),
  z.literal(20),
  z.literal(21),
  z.literal(22),
  z.literal(23),
  z.literal(24),
  z.literal(25),
  z.literal(26),
  z.literal(27),
]);
const Easee_Core_Enums_ReasonForNoCurrent = z.union([
  z.literal(0),
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
  z.literal(6),
  z.literal(7),
  z.literal(8),
  z.literal(50),
  z.literal(51),
  z.literal(52),
  z.literal(53),
  z.literal(54),
  z.literal(55),
  z.literal(56),
  z.literal(57),
  z.literal(100),
]);
const Easee_Core_Enums_SimplifiedChargerError = z.union([
  z.literal(100),
  z.literal(103),
  z.literal(106),
  z.literal(107),
  z.literal(108),
  z.literal(109),
  z.literal(110),
  z.literal(111),
  z.literal(113),
  z.literal(207),
  z.literal(218),
]);
const Easee_Core_DTOs_Charger_ChargerStateDTO = z
  .object({
    smartCharging: z.boolean().nullable(),
    cableLocked: z.boolean().nullable(),
    chargerOpMode: Easee_Core_Enums_OpModeType,
    totalPower: z.number().nullable(),
    sessionEnergy: z.number().nullable(),
    energyPerHour: z.number().nullable(),
    wiFiRSSI: z.number().int().nullable(),
    cellRSSI: z.number().int().nullable(),
    localRSSI: z.number().int().nullable(),
    outputPhase: Easee_Core_Enums_OutputPhaseType,
    dynamicCircuitCurrentP1: z.number().nullable(),
    dynamicCircuitCurrentP2: z.number().nullable(),
    dynamicCircuitCurrentP3: z.number().nullable(),
    latestPulse: z.string().datetime({ offset: true }).nullable(),
    chargerFirmware: z.number().int(),
    voltage: z.number().nullable(),
    chargerRAT: z.number().int().nullable(),
    lockCablePermanently: z.boolean().nullable(),
    inCurrentT2: z.number().nullable(),
    inCurrentT3: z.number().nullable(),
    inCurrentT4: z.number().nullable(),
    inCurrentT5: z.number().nullable(),
    outputCurrent: z.number().nullable(),
    isOnline: z.boolean(),
    inVoltageT1T2: z.number().nullable(),
    inVoltageT1T3: z.number().nullable(),
    inVoltageT1T4: z.number().nullable(),
    inVoltageT1T5: z.number().nullable(),
    inVoltageT2T3: z.number().nullable(),
    inVoltageT2T4: z.number().nullable(),
    inVoltageT2T5: z.number().nullable(),
    inVoltageT3T4: z.number().nullable(),
    inVoltageT3T5: z.number().nullable(),
    inVoltageT4T5: z.number().nullable(),
    ledMode: Easee_Core_Enums_ChargerLEDModeType,
    cableRating: z.number().nullable(),
    dynamicChargerCurrent: z.number().nullable(),
    circuitTotalAllocatedPhaseConductorCurrentL1: z.number().nullable(),
    circuitTotalAllocatedPhaseConductorCurrentL2: z.number().nullable(),
    circuitTotalAllocatedPhaseConductorCurrentL3: z.number().nullable(),
    circuitTotalPhaseConductorCurrentL1: z.number().nullable(),
    circuitTotalPhaseConductorCurrentL2: z.number().nullable(),
    circuitTotalPhaseConductorCurrentL3: z.number().nullable(),
    reasonForNoCurrent: Easee_Core_Enums_ReasonForNoCurrent,
    wiFiAPEnabled: z.boolean().nullable(),
    lifetimeEnergy: z.number().nullable(),
    offlineMaxCircuitCurrentP1: z.number().int().nullable(),
    offlineMaxCircuitCurrentP2: z.number().int().nullable(),
    offlineMaxCircuitCurrentP3: z.number().int().nullable(),
    errorCode: z.number().int(),
    fatalErrorCode: z.number().int(),
    errors: z.array(Easee_Core_Enums_SimplifiedChargerError).nullable(),
    eqAvailableCurrentP1: z.number().nullable(),
    eqAvailableCurrentP2: z.number().nullable(),
    eqAvailableCurrentP3: z.number().nullable(),
    deratedCurrent: z.number().nullable(),
    deratingActive: z.boolean().nullable(),
    connectedToCloud: z.boolean().nullable(),
  })
  .partial();
const Easee_Core_DTOs_Dashboard_DashboardChargerState = z
  .object({
    chargerID: z.string().nullable(),
    chargerConfig: Easee_Core_DTOs_Charger_ChargerConfigurationDTO,
    chargerState: Easee_Core_DTOs_Charger_ChargerStateDTO,
  })
  .partial();
const Easee_Core_DTOs_Dashboard_DashboardCircuitStateDTO = z
  .object({
    circuit: Easee_Core_DTOs_Site_CircuitDTO,
    chargerStates: z.array(Easee_Core_DTOs_Dashboard_DashboardChargerState).nullable(),
  })
  .partial();
const Easee_Core_DTOs_Dashboard_DashboardStateDTO = z
  .object({
    circuitStates: z.array(Easee_Core_DTOs_Dashboard_DashboardCircuitStateDTO).nullable(),
    site: Easee_Core_DTOs_Site_SiteDTO,
  })
  .partial();
const Easee_Core_DTOs_Site_SiteCostDTO = z.object({
  currencyId: z.string(),
  costPerKWh: z.number().nullish(),
  costPerKwhExcludeVat: z.number().nullish(),
  vat: z.number().nullish(),
});
const Easee_Core_DTOs_Charger_ChargerEnergyDTO = z
  .object({ chargerId: z.string().nullable(), lifeTimeEnergy: z.number().nullable() })
  .partial();
const Easee_SiteStructure_Domain_Ports_SiteCircuitDTO = z
  .object({ circuitName: z.string().nullable(), siteKey: z.string().nullable() })
  .partial();
const Easee_Core_DTOs_Site_UpdateCircuitDTO = z
  .object({
    id: z.number().int(),
    siteId: z.number().int(),
    circuitPanelId: z.number().int(),
    panelName: z.string().nullable(),
    ratedCurrent: z.number(),
    backplates: z.array(Easee_Core_DTOs_Charger_BackPlateDTO).nullable(),
  })
  .partial();
const Easee_Core_DTOs_Site_CircuitSettingsDTO = z
  .object({
    masterChargerId: z.string().nullable(),
    dynamicCircuitCurrentP1: z.number().nullable(),
    dynamicCircuitCurrentP2: z.number().nullable(),
    dynamicCircuitCurrentP3: z.number().nullable(),
    maxCircuitCurrentP1: z.number().nullable(),
    maxCircuitCurrentP2: z.number().nullable(),
    maxCircuitCurrentP3: z.number().nullable(),
    enableIdleCurrent: z.boolean().nullable(),
    offlineMaxCircuitCurrentP1: z.number().int().nullable(),
    offlineMaxCircuitCurrentP2: z.number().int().nullable(),
    offlineMaxCircuitCurrentP3: z.number().int().nullable(),
  })
  .partial();
const Easee_Core_DTOs_Site_ExtendedCircuitSettingsDTO = z
  .object({
    dynamicCircuitCurrentP1: z.number().nullable(),
    dynamicCircuitCurrentP2: z.number().nullable(),
    dynamicCircuitCurrentP3: z.number().nullable(),
    maxCircuitCurrentP1: z.number().nullable(),
    maxCircuitCurrentP2: z.number().nullable(),
    maxCircuitCurrentP3: z.number().nullable(),
    enableIdleCurrent: z.boolean().nullable(),
    offlineMaxCircuitCurrentP1: z.number().int().nullable(),
    offlineMaxCircuitCurrentP2: z.number().int().nullable(),
    offlineMaxCircuitCurrentP3: z.number().int().nullable(),
    masterChargerId: z.string().nullable(),
    equalizerId: z.string().nullable(),
    allowOfflineMaxCircuitCurrent: z.boolean(),
  })
  .partial();
const Easee_Core_DTOs_Site_DynamicCircuitCurrentDto = z
  .object({ phase1: z.number().nullable(), phase2: z.number().nullable(), phase3: z.number().nullable() })
  .partial();
const Easee_Core_DTOs_Site_DynamicCircuitCurrentTtlDto = z
  .object({
    phase1: z.number().nullable(),
    phase2: z.number().nullable(),
    phase3: z.number().nullable(),
    timeToLive: z.number().int().nullable(),
  })
  .partial();
const Easee_Core_DTOs_Session_MonthlySessionSummaryDTO = z
  .object({ year: z.number().int(), month: z.number().int(), totalEnergyUsage: z.number() })
  .partial();
const Easee_Core_DTOs_Session_YearlySessionSummaryDTO = z
  .object({ year: z.number().int(), totalEnergyUsage: z.number() })
  .partial();

export const schemas = {
  Easee_AccessControl_Models_LoginDto,
  Easee_UserAdministration_DTO_UserToken,
  Easee_AccessControl_Models_RefreshTokenDTO,
  Easee_Core_DTOs_Account_ProfileDTO,
  Microsoft_AspNetCore_Mvc_ProblemDetails,
  Easee_Core_Enums_LevelOfAccess,
  Easee_AccessControl_Domain_Entities_CountryDTO,
  Easee_AccessControl_Domain_DTO_AddressDTO,
  Easee_Core_Constants_SiteType,
  Easee_Core_Enums_SiteUserRole,
  Easee_Core_Constants_ProductType,
  Easee_Core_DTOs_MyProducts_BackPlateDTO,
  Easee_Core_Enums_ChargerColorType,
  Easee_AccessControl_Domain_DTO_ChargerDTO,
  Easee_AccessControl_Domain_DTO_CircuitDTO,
  Easee_Core_DTOs_MyProducts_EqualizerDTO,
  Easee_AccessControl_Domain_DTO_SiteDTO,
  Easee_AccessControl_Models_PairChargerPartnerDTO,
  Easee_AccessControl_Models_PartnerDetailedDTO,
  Easee_AccessControl_Models_ChargerPermissionRequestDTO,
  Easee_AccessControl_Domain_DTO_UserChargerDTO,
  Easee_AccessControl_Models_SiteOwnerDTO,
  Easee_Partners_Domain_Entities_PartnerSiteGroup,
  Easee_UserAdministration_Domain_DTO_SiteUserDTO,
  Easee_UserAdministration_Domain_DTO_SitePermissionDTO,
  Easee_UserAdministration_Domain_DTO_BasicProfile,
  Easee_AccessControl_Models_SitePermissionRequestDTO,
  Easee_Core_DTOs_Site_UpdateSitePermissionRequestDTO,
  Easee_Core_DTOs_Site_ChargerAccessDTO,
  Easee_Core_DTOs_Charger_BasicChargerDTO,
  Easee_Core_Enums_BackPlateFeature,
  Easee_Core_DTOs_Charger_BackPlateDTO,
  Easee_Core_DTOs_Charger_ChargerDTO,
  Easee_Core_DTOs_Partners_PartnerDTO,
  Easee_Core_DTOs_Charger_ChargerInfoDTO,
  Easee_SiteStructure_Domain_Entities_Enums_LevelOfAccess,
  Easee_SiteStructure_Domain_Ports_CountryDTO,
  Easee_SiteStructure_Domain_Ports_AddressDTO,
  Easee_SiteStructure_Domain_Ports_ContactInfoDTO,
  Easee_SiteStructure_Domain_Entities_Enums_ProductType,
  Easee_SiteStructure_Domain_Entities_Enums_ChargerColorType,
  Easee_SiteStructure_Domain_Entities_Enums_BackPlateFeature,
  Easee_SiteStructure_Domain_Ports_BackPlateDto,
  Easee_SiteStructure_Domain_Entities_Enums_SiteUserRole,
  Easee_SiteStructure_Domain_Ports_ChargerDTO,
  Easee_SiteStructure_Domain_Ports_CircuitDTO,
  Easee_SiteStructure_Domain_Ports_EqualizerDTO,
  Easee_SiteStructure_Domain_Ports_SiteDTO,
  PowerGridType,
  Easee_Core_Enums_OfflineChargingModeType,
  Easee_Core_Enums_PhaseMode,
  Easee_Core_Enums_NodeType,
  Easee_Core_DTOs_Charger_ChargerConfigurationDTO,
  Easee_Core_DTOs_Session_AggregatedUsageDTO,
  Easee_Core_DTOs_Charger_CommentDTO,
  Easee_Core_DTOs_Charger_ChargePlanDTO,
  Easee_Core_Enums_ChargeScheduleTag,
  Easee_Core_Enums_EuropeanDayOfWeek,
  Easee_Core_DTOs_Schedule_WeeklyChargeScheduleRangeDTO,
  Easee_Core_DTOs_Schedule_WeeklyChargeScheduleDateDTO,
  Easee_Core_DTOs_Schedule_WeeklyChargeScheduleResponseDTO,
  Easee_Core_DTOs_Schedule_WeeklyChargeScheduleRequestDTO,
  Easee_Core_DTOs_Schedule_ScheduleFeatureRequestDto,
  Easee_Core_DTOs_Charger_ChargerSettingDTO,
  Easee_Core_DTOs_Charger_LockStateDTO,
  Easee_Core_DTOs_Charger_ScanWifiSettingDTO,
  Easee_Core_DTOs_Charger_WifiConfigDTO,
  Easee_Core_DTOs_Charger_PairRFIDSettingsDTO,
  Easee_Core_DTOs_Charger_UsageStatisticsDTO,
  Easee_Core_DTOs_Session_ChargeSessionDTO,
  Easee_Core_DTOs_Session_AuthorizationTokenEnergy,
  Easee_Core_DTOs_Session_YearlySummaryDTO,
  Easee_Core_DTOs_Session_MonthlySummaryDTO,
  Easee_Core_DTOs_Session_WeeklySummaryDTO,
  Easee_Core_DTOs_Session_ChargingSessionDetailDTO,
  Easee_Core_DTOs_Session_DailySummaryDTO,
  Easee_Core_DTOs_Session_HourlySummaryDTO,
  Easee_BusinessLayer_Managers_TotalConsumption_Period,
  Easee_BusinessLayer_Managers_TotalConsumption_ChargerConsumption,
  Easee_BusinessLayer_Managers_TotalConsumption_SiteConsumption,
  Easee_BusinessLayer_Managers_TotalConsumption_TotalConsumptionPeriod,
  Easee_Core_DTOs_Equalizer_EqualizerDTO,
  Easee_Core_DTOs_Equalizer_DetailedEqualizerDTO,
  Easee_Core_Enums_ExternalMeterType,
  Easee_Core_Enums_GridType,
  Easee_Core_DTOs_Equalizer_ChildDTO,
  Easee_Core_DTOs_Equalizer_ChildReportDTO,
  Easee_Core_Enums_DeviceMode,
  Easee_Core_DTOs_Equalizer_DeviceModeDTO,
  Easee_Core_DTOs_Equalizer_EqualizerConfigurationDTO,
  Easee_Core_DTOs_Site_CountryDTO,
  Easee_Core_DTOs_Site_AddressDTO,
  Easee_Core_DTOs_Site_ContactInfoDTO,
  Easee_Core_DTOs_Charger_DetailChargerDTO,
  Easee_Core_DTOs_Site_CircuitDTO,
  Easee_Core_DTOs_Site_SiteDTO,
  Easee_Core_DTOs_Equalizer_MeterSettingsDTO,
  Easee_Core_DTOs_Equalizer_MaxAllocatedCurrentDTO,
  Easee_Services_LifetimeEnergyReporting_Measurement,
  Easee_Services_LifetimeEnergyReporting_GetAllMeasurementsResponse,
  Easee_Services_LifetimeEnergyReporting_AggregatedLifetimeEnergy,
  Easee_Services_LifetimeEnergyReporting_LifetimeEnergyMeasurementSettingsRequest,
  Easee_Core_Models_Site_Currency,
  Masterloop_Core_Types_Base_DataType,
  Easee_Core_DTOs_Charger_ObservationPropertyDTO,
  Easee_Core_DTOs_Site_BasicSiteDTO,
  Easee_Core_DTOs_Site_DetailSiteDTO,
  Microsoft_AspNetCore_JsonPatch_Operations_OperationType,
  Microsoft_AspNetCore_JsonPatch_Operations_Operation,
  Easee_Core_Enums_OpModeType,
  Easee_Core_Enums_OutputPhaseType,
  Easee_Core_Enums_ChargerLEDModeType,
  Easee_Core_Enums_ReasonForNoCurrent,
  Easee_Core_Enums_SimplifiedChargerError,
  Easee_Core_DTOs_Charger_ChargerStateDTO,
  Easee_Core_DTOs_Dashboard_DashboardChargerState,
  Easee_Core_DTOs_Dashboard_DashboardCircuitStateDTO,
  Easee_Core_DTOs_Dashboard_DashboardStateDTO,
  Easee_Core_DTOs_Site_SiteCostDTO,
  Easee_Core_DTOs_Charger_ChargerEnergyDTO,
  Easee_SiteStructure_Domain_Ports_SiteCircuitDTO,
  Easee_Core_DTOs_Site_UpdateCircuitDTO,
  Easee_Core_DTOs_Site_CircuitSettingsDTO,
  Easee_Core_DTOs_Site_ExtendedCircuitSettingsDTO,
  Easee_Core_DTOs_Site_DynamicCircuitCurrentDto,
  Easee_Core_DTOs_Site_DynamicCircuitCurrentTtlDto,
  Easee_Core_DTOs_Session_MonthlySessionSummaryDTO,
  Easee_Core_DTOs_Session_YearlySessionSummaryDTO,
};

const endpoints = makeApi([
  {
    method: 'post',
    path: '/api/access/token',
    alias: 'postApiaccesstoken',
    requestFormat: 'form-data',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z.object({ resource: z.string() }).passthrough(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'delete',
    path: '/api/accounts/:accountId/invalidate_token',
    alias: 'deleteApiaccountsAccountIdinvalidate_token',
    requestFormat: 'json',
    parameters: [
      {
        name: 'accountId',
        type: 'Path',
        schema: z.number().int(),
      },
      {
        name: 'token',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'post',
    path: '/api/accounts/login',
    alias: 'postApiaccountslogin',
    description: `Authenticate and retrieve access Token.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Username and password`,
        type: 'Body',
        schema: Easee_AccessControl_Models_LoginDto,
      },
    ],
    response: Easee_UserAdministration_DTO_UserToken,
  },
  {
    method: 'get',
    path: '/api/accounts/products',
    alias: 'getApiaccountsproducts',
    description: `Get products of logged in account. Product can be either charger or equalizer.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'userId',
        type: 'Query',
        schema: z.number().int().optional(),
      },
    ],
    response: z.array(Easee_AccessControl_Domain_DTO_SiteDTO),
  },
  {
    method: 'get',
    path: '/api/accounts/profile',
    alias: 'getApiaccountsprofile',
    description: `Get profile info of logged in account.`,
    requestFormat: 'json',
    response: Easee_Core_DTOs_Account_ProfileDTO,
    errors: [
      {
        status: 404,
        description: `Not Found`,
        schema: z
          .object({
            type: z.string().nullable(),
            title: z.string().nullable(),
            status: z.number().int().nullable(),
            detail: z.string().nullable(),
            instance: z.string().nullable(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/api/accounts/refresh_token',
    alias: 'postApiaccountsrefresh_token',
    description: `Refresh access token.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Access token and refresh token`,
        type: 'Body',
        schema: Easee_AccessControl_Models_RefreshTokenDTO,
      },
    ],
    response: Easee_UserAdministration_DTO_UserToken,
  },
  {
    method: 'get',
    path: '/api/chargers',
    alias: 'getApichargers',
    description: `Get chargers.&lt;br /&gt;If role is Partner, all partner chargers will be returned.&lt;br /&gt;If role is User, the users
chargers will be returned.&lt;br /&gt;Rate limited: Rate limited at max 2 requests per minute`,
    requestFormat: 'json',
    response: z.array(Easee_Core_DTOs_Charger_BasicChargerDTO),
    errors: [
      {
        status: 403,
        description: `Forbidden`,
        schema: z
          .object({
            type: z.string().nullable(),
            title: z.string().nullable(),
            status: z.number().int().nullable(),
            detail: z.string().nullable(),
            instance: z.string().nullable(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/api/chargers/:id',
    alias: 'getApichargersId',
    description: `Get a specified charger.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: Easee_Core_DTOs_Charger_ChargerDTO,
    errors: [
      {
        status: 403,
        description: `Forbidden`,
        schema: z
          .object({
            type: z.string().nullable(),
            title: z.string().nullable(),
            status: z.number().int().nullable(),
            detail: z.string().nullable(),
            instance: z.string().nullable(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 404,
        description: `Not Found`,
        schema: z
          .object({
            type: z.string().nullable(),
            title: z.string().nullable(),
            status: z.number().int().nullable(),
            detail: z.string().nullable(),
            instance: z.string().nullable(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'put',
    path: '/api/chargers/:id/access',
    alias: 'putApichargersIdaccess',
    description: `Set access level to the charger.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Access level`,
        type: 'Body',
        schema: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(1), z.literal(2), z.literal(3)]),
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'delete',
    path: '/api/chargers/:id/access',
    alias: 'deleteApichargersIdaccess',
    description: `Delete access level from the charger.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/chargers/:id/basic_charge_plan',
    alias: 'getApichargersIdbasic_charge_plan',
    description: `Get basic charge plan of charger.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: z.array(Easee_Core_DTOs_Charger_ChargePlanDTO),
  },
  {
    method: 'post',
    path: '/api/chargers/:id/basic_charge_plan',
    alias: 'postApichargersIdbasic_charge_plan',
    description: `Set basic charge plan of charger. IsEnabled attribute allow to IsEnabled the charge plan`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Charge plan`,
        type: 'Body',
        schema: Easee_Core_DTOs_Charger_ChargePlanDTO,
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Request has missing/invalid values`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Missing authorization data. Check &quot;Authorization&quot; header`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden. Authorization set, but access to resource is denied`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Oops! Unexpected internal error. Request has been logged and code monkeys warned`,
        schema: z.void(),
      },
      {
        status: 503,
        description: `Server gateway cannot reach API. Try again in about a minute...`,
        schema: z.void(),
      },
      {
        status: 504,
        description: `Unable to deliver commands upstream. End device is not reachable, or a problem with queueing the
device command`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'delete',
    path: '/api/chargers/:id/basic_charge_plan',
    alias: 'deleteApichargersIdbasic_charge_plan',
    description: `Delete basic charge plan of charger.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Request has missing/invalid values`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Missing authorization data. Check &quot;Authorization&quot; header`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden. Authorization set, but access to resource is denied`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Oops! Unexpected internal error. Request has been logged and code monkeys warned`,
        schema: z.void(),
      },
      {
        status: 503,
        description: `Server gateway cannot reach API. Try again in about a minute...`,
        schema: z.void(),
      },
      {
        status: 504,
        description: `Unable to deliver commands upstream. End device is not reachable, or a problem with queueing the
device command`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/api/chargers/:id/charge_schedule/features',
    alias: 'postApichargersIdcharge_schedulefeatures',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `charge schedule feature request`,
        type: 'Body',
        schema: Easee_Core_DTOs_Schedule_ScheduleFeatureRequestDto,
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Request has missing/invalid values`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Missing authorization data. Check &quot;Authorization&quot; header`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden. Authorization set, but access to resource is denied`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Oops! Unexpected internal error. Request has been logged and code monkeys warned`,
        schema: z.void(),
      },
      {
        status: 503,
        description: `Server gateway cannot reach API. Try again in about a minute...`,
        schema: z.void(),
      },
      {
        status: 504,
        description: `Unable to deliver commands upstream. End device is not reachable, or a problem with queueing the
device command`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/api/chargers/:id/commands/lock_state',
    alias: 'postApichargersIdcommandslock_state',
    description: `If state &#x3D; true, cable always locked in charger. state &#x3D; false, cable is unlocked when car is disconnected`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Cable lock state`,
        type: 'Body',
        schema: z.object({ state: z.boolean() }).partial(),
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Request has missing/invalid values`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Missing authorization data. Check &quot;Authorization&quot; header`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden. Authorization set, but access to resource is denied`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Oops! Unexpected internal error. Request has been logged and code monkeys warned`,
        schema: z.void(),
      },
      {
        status: 503,
        description: `Server gateway cannot reach API. Try again in about a minute...`,
        schema: z.void(),
      },
      {
        status: 504,
        description: `Unable to deliver commands upstream. End device is not reachable, or a problem with queueing the
device command`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/api/chargers/:id/commands/override_schedule',
    alias: 'postApichargersIdcommandsoverride_schedule',
    description: `Allows current session to charge immediately provided that schedule is the only mechanism stopping charge
currently.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Request has missing/invalid values`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Missing authorization data. Check &quot;Authorization&quot; header`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden. Authorization set, but access to resource is denied`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Oops! Unexpected internal error. Request has been logged and code monkeys warned`,
        schema: z.void(),
      },
      {
        status: 503,
        description: `Server gateway cannot reach API. Try again in about a minute...`,
        schema: z.void(),
      },
      {
        status: 504,
        description: `Unable to deliver commands upstream. End device is not reachable, or a problem with queueing the
device command`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/api/chargers/:id/commands/pause_charging',
    alias: 'postApichargersIdcommandspause_charging',
    description: `Pauses current charging session but keeps authorization. Limits dynamic charger current to 0. &lt;br /&gt;Reset on
on new car connection`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Request has missing/invalid values`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Missing authorization data. Check &quot;Authorization&quot; header`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden. Authorization set, but access to resource is denied`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Oops! Unexpected internal error. Request has been logged and code monkeys warned`,
        schema: z.void(),
      },
      {
        status: 503,
        description: `Server gateway cannot reach API. Try again in about a minute...`,
        schema: z.void(),
      },
      {
        status: 504,
        description: `Unable to deliver commands upstream. End device is not reachable, or a problem with queueing the
device command`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/api/chargers/:id/commands/poll_chargeropmode',
    alias: 'postApichargersIdcommandspoll_chargeropmode',
    description: `Rate limited to once every 3 minutes`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Request has missing/invalid values`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Missing authorization data. Check &quot;Authorization&quot; header`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden. Authorization set, but access to resource is denied`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Oops! Unexpected internal error. Request has been logged and code monkeys warned`,
        schema: z.void(),
      },
      {
        status: 503,
        description: `Server gateway cannot reach API. Try again in about a minute...`,
        schema: z.void(),
      },
      {
        status: 504,
        description: `Unable to deliver commands upstream. End device is not reachable, or a problem with queueing the
device command`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/api/chargers/:id/commands/poll_lifetimeenergy',
    alias: 'postApichargersIdcommandspoll_lifetimeenergy',
    description: `Rate limited to once every 3 minutes`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Request has missing/invalid values`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Missing authorization data. Check &quot;Authorization&quot; header`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden. Authorization set, but access to resource is denied`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Oops! Unexpected internal error. Request has been logged and code monkeys warned`,
        schema: z.void(),
      },
      {
        status: 503,
        description: `Server gateway cannot reach API. Try again in about a minute...`,
        schema: z.void(),
      },
      {
        status: 504,
        description: `Unable to deliver commands upstream. End device is not reachable, or a problem with queueing the
device command`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/api/chargers/:id/commands/reboot',
    alias: 'postApichargersIdcommandsreboot',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Request has missing/invalid values`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Missing authorization data. Check &quot;Authorization&quot; header`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden. Authorization set, but access to resource is denied`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Oops! Unexpected internal error. Request has been logged and code monkeys warned`,
        schema: z.void(),
      },
      {
        status: 503,
        description: `Server gateway cannot reach API. Try again in about a minute...`,
        schema: z.void(),
      },
      {
        status: 504,
        description: `Unable to deliver commands upstream. End device is not reachable, or a problem with queueing the
device command`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/api/chargers/:id/commands/resume_charging',
    alias: 'postApichargersIdcommandsresume_charging',
    description: `Resumes current charging session. Resets output current limit set in dynamic charger current`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Request has missing/invalid values`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Missing authorization data. Check &quot;Authorization&quot; header`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden. Authorization set, but access to resource is denied`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Oops! Unexpected internal error. Request has been logged and code monkeys warned`,
        schema: z.void(),
      },
      {
        status: 503,
        description: `Server gateway cannot reach API. Try again in about a minute...`,
        schema: z.void(),
      },
      {
        status: 504,
        description: `Unable to deliver commands upstream. End device is not reachable, or a problem with queueing the
device command`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/api/chargers/:id/commands/scan_wifi',
    alias: 'postApichargersIdcommandsscan_wifi',
    description: `Sends a Wi-Fi scan command to the charger. Result available in SignalR command responses and observations.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Limits the time spent by firmware to scan`,
        type: 'Body',
        schema: z.object({ timeout: z.number().int().nullable() }).partial(),
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Request has missing/invalid values`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Missing authorization data. Check &quot;Authorization&quot; header`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden. Authorization set, but access to resource is denied`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Oops! Unexpected internal error. Request has been logged and code monkeys warned`,
        schema: z.void(),
      },
      {
        status: 503,
        description: `Server gateway cannot reach API. Try again in about a minute...`,
        schema: z.void(),
      },
      {
        status: 504,
        description: `Unable to deliver commands upstream. End device is not reachable, or a problem with queueing the
device command`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/api/chargers/:id/commands/set_rfid_pairing_mode_async',
    alias: 'postApichargersIdcommandsset_rfid_pairing_mode_async',
    description: `Pair new RFID tag with charger. Listen to the &quot;CommandResponse&quot; stream and observation &#x27;69:PairedUserIDToken&#x27;
to get the new token as read by the charger`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Pair RFID settings`,
        type: 'Body',
        schema: z.object({ timeout: z.number().int() }).partial(),
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Request has missing/invalid values`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Missing authorization data. Check &quot;Authorization&quot; header`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden. Authorization set, but access to resource is denied`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Oops! Unexpected internal error. Request has been logged and code monkeys warned`,
        schema: z.void(),
      },
      {
        status: 503,
        description: `Server gateway cannot reach API. Try again in about a minute...`,
        schema: z.void(),
      },
      {
        status: 504,
        description: `Unable to deliver commands upstream. End device is not reachable, or a problem with queueing the
device command`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/api/chargers/:id/commands/set_wifi_config',
    alias: 'postApichargersIdcommandsset_wifi_config',
    description: `Sends Wi-Fi configuration to the charger. The charger may be unavailable up to 1 hour if incorrect values are
set in firmware`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `SSID and Password`,
        type: 'Body',
        schema: Easee_Core_DTOs_Charger_WifiConfigDTO,
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Request has missing/invalid values`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Missing authorization data. Check &quot;Authorization&quot; header`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden. Authorization set, but access to resource is denied`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Oops! Unexpected internal error. Request has been logged and code monkeys warned`,
        schema: z.void(),
      },
      {
        status: 503,
        description: `Server gateway cannot reach API. Try again in about a minute...`,
        schema: z.void(),
      },
      {
        status: 504,
        description: `Unable to deliver commands upstream. End device is not reachable, or a problem with queueing the
device command`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/api/chargers/:id/commands/smart_charging',
    alias: 'postApichargersIdcommandssmart_charging',
    description: `Disable by using the &#x27;settings&#x27; endpoint`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Request has missing/invalid values`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Missing authorization data. Check &quot;Authorization&quot; header`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden. Authorization set, but access to resource is denied`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Oops! Unexpected internal error. Request has been logged and code monkeys warned`,
        schema: z.void(),
      },
      {
        status: 503,
        description: `Server gateway cannot reach API. Try again in about a minute...`,
        schema: z.void(),
      },
      {
        status: 504,
        description: `Unable to deliver commands upstream. End device is not reachable, or a problem with queueing the
device command`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/api/chargers/:id/commands/stop_charging',
    alias: 'postApichargersIdcommandsstop_charging',
    description: `Stops a charger with an active authorization from delivering power and revokes authorization. Will have no
effect if &#x27;authorizationRequired&#x27; is false or charger is not authorized`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Request has missing/invalid values`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Missing authorization data. Check &quot;Authorization&quot; header`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden. Authorization set, but access to resource is denied`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Oops! Unexpected internal error. Request has been logged and code monkeys warned`,
        schema: z.void(),
      },
      {
        status: 503,
        description: `Server gateway cannot reach API. Try again in about a minute...`,
        schema: z.void(),
      },
      {
        status: 504,
        description: `Unable to deliver commands upstream. End device is not reachable, or a problem with queueing the
device command`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/api/chargers/:id/commands/toggle_charging',
    alias: 'postApichargersIdcommandstoggle_charging',
    description: `Send charging command (Start/Stop or Pause/Resume). For chargers requiring online authorization, start/stop
commands are used. &lt;br /&gt;For chargers without online authorization,  pause/resume commands are used.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Request has missing/invalid values`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Missing authorization data. Check &quot;Authorization&quot; header`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden. Authorization set, but access to resource is denied`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Oops! Unexpected internal error. Request has been logged and code monkeys warned`,
        schema: z.void(),
      },
      {
        status: 503,
        description: `Server gateway cannot reach API. Try again in about a minute...`,
        schema: z.void(),
      },
      {
        status: 504,
        description: `Unable to deliver commands upstream. End device is not reachable, or a problem with queueing the
device command`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/api/chargers/:id/commands/update_firmware',
    alias: 'postApichargersIdcommandsupdate_firmware',
    description: `Updates firmware to latest public release`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Request has missing/invalid values`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Missing authorization data. Check &quot;Authorization&quot; header`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden. Authorization set, but access to resource is denied`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Oops! Unexpected internal error. Request has been logged and code monkeys warned`,
        schema: z.void(),
      },
      {
        status: 503,
        description: `Server gateway cannot reach API. Try again in about a minute...`,
        schema: z.void(),
      },
      {
        status: 504,
        description: `Unable to deliver commands upstream. End device is not reachable, or a problem with queueing the
device command`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/api/chargers/:id/comments',
    alias: 'getApichargersIdcomments',
    description: `Get user comments for a charger.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: z.array(Easee_Core_DTOs_Charger_CommentDTO),
  },
  {
    method: 'get',
    path: '/api/chargers/:id/config',
    alias: 'getApichargersIdconfig',
    description: `Get charger configuration.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: Easee_Core_DTOs_Charger_ChargerConfigurationDTO,
  },
  {
    method: 'get',
    path: '/api/chargers/:id/details',
    alias: 'getApichargersIddetails',
    description: `Get charger details.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: Easee_Core_DTOs_Charger_ChargerInfoDTO,
  },
  {
    method: 'delete',
    path: '/api/chargers/:id/operator',
    alias: 'deleteApichargersIdoperator',
    description: `Remove operator from a charger.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'post',
    path: '/api/chargers/:id/pair',
    alias: 'postApichargersIdpair',
    description: `Pair a charger to an account.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'pinCode',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'post',
    path: '/api/chargers/:id/partners',
    alias: 'postApichargersIdpartners',
    description: `Set partner of a charger.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Partner ID`,
        type: 'Body',
        schema: z.object({ id: z.number().int() }).partial(),
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/chargers/:id/partners',
    alias: 'getApichargersIdpartners',
    description: `Get partner of charger.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: Easee_AccessControl_Models_PartnerDetailedDTO,
  },
  {
    method: 'delete',
    path: '/api/chargers/:id/partners/:partnerId',
    alias: 'deleteApichargersIdpartnersPartnerId',
    description: `Remove partner from a charger.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'partnerId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'post',
    path: '/api/chargers/:id/permission',
    alias: 'postApichargersIdpermission',
    description: `Grant permissions to the charger for a given phone number.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `User phone number`,
        type: 'Body',
        schema: z.object({ phoneNo: z.string().nullable() }).partial(),
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'delete',
    path: '/api/chargers/:id/permission',
    alias: 'deleteApichargersIdpermission',
    description: `Remove permission from the charger for a given phone number.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'phone_no',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'email',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/chargers/:id/permission',
    alias: 'getApichargersIdpermission',
    description: `Get permissions to the charger.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.array(Easee_AccessControl_Domain_DTO_UserChargerDTO),
    errors: [
      {
        status: 403,
        description: `Forbidden`,
        schema: z
          .object({
            type: z.string().nullable(),
            title: z.string().nullable(),
            status: z.number().int().nullable(),
            detail: z.string().nullable(),
            instance: z.string().nullable(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/api/chargers/:id/sessions/latest',
    alias: 'getApichargersIdsessionslatest',
    description: `Get last updated charging session.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: Easee_Core_DTOs_Charger_UsageStatisticsDTO,
    errors: [
      {
        status: 404,
        description: `Not Found`,
        schema: z
          .object({
            type: z.string().nullable(),
            title: z.string().nullable(),
            status: z.number().int().nullable(),
            detail: z.string().nullable(),
            instance: z.string().nullable(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/api/chargers/:id/sessions/ongoing',
    alias: 'getApichargersIdsessionsongoing',
    description: `Get current state of ongoing charging session.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: Easee_Core_DTOs_Charger_UsageStatisticsDTO,
    errors: [
      {
        status: 404,
        description: `Not Found`,
        schema: z
          .object({
            type: z.string().nullable(),
            title: z.string().nullable(),
            status: z.number().int().nullable(),
            detail: z.string().nullable(),
            instance: z.string().nullable(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/api/chargers/:id/settings',
    alias: 'postApichargersIdsettings',
    description: `Charger settings to update. Please only specify keys you want to change. Endpoint handles partial JSON objects
and will give a 400 response if it does not understand the request.&lt;br /&gt;Will only forward commands to device if
new value !&#x3D; old value &lt;br /&gt; Rate limited at max 20 requests per minute.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Charger settings to set`,
        type: 'Body',
        schema: Easee_Core_DTOs_Charger_ChargerSettingDTO,
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Request has missing/invalid values`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Missing authorization data. Check &quot;Authorization&quot; header`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden. Authorization set, but access to resource is denied`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Oops! Unexpected internal error. Request has been logged and code monkeys warned`,
        schema: z.void(),
      },
      {
        status: 503,
        description: `Server gateway cannot reach API. Try again in about a minute...`,
        schema: z.void(),
      },
      {
        status: 504,
        description: `Unable to deliver commands upstream. End device is not reachable, or a problem with queueing the
device command`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/api/chargers/:id/site',
    alias: 'getApichargersIdsite',
    description: `Get charger site.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: Easee_SiteStructure_Domain_Ports_SiteDTO,
  },
  {
    method: 'post',
    path: '/api/chargers/:id/unpair',
    alias: 'postApichargersIdunpair',
    description: `Unpair a charger from an account.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'pinCode',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/chargers/:id/usage/hourly/:from/:to',
    alias: 'getApichargersIdusagehourlyFromTo',
    description: `Get hourly power usage for a given period.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
      {
        name: 'from',
        type: 'Path',
        schema: z.string().datetime({ offset: true }),
      },
      {
        name: 'to',
        type: 'Path',
        schema: z.string().datetime({ offset: true }),
      },
    ],
    response: z.array(Easee_Core_DTOs_Session_AggregatedUsageDTO),
  },
  {
    method: 'get',
    path: '/api/chargers/:id/weekly_charge_plan',
    alias: 'getApichargersIdweekly_charge_plan',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: Easee_Core_DTOs_Schedule_WeeklyChargeScheduleResponseDTO,
  },
  {
    method: 'post',
    path: '/api/chargers/:id/weekly_charge_plan',
    alias: 'postApichargersIdweekly_charge_plan',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Weekly charge plan details`,
        type: 'Body',
        schema: Easee_Core_DTOs_Schedule_WeeklyChargeScheduleRequestDTO,
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Request has missing/invalid values`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Missing authorization data. Check &quot;Authorization&quot; header`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden. Authorization set, but access to resource is denied`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Oops! Unexpected internal error. Request has been logged and code monkeys warned`,
        schema: z.void(),
      },
      {
        status: 503,
        description: `Server gateway cannot reach API. Try again in about a minute...`,
        schema: z.void(),
      },
      {
        status: 504,
        description: `Unable to deliver commands upstream. End device is not reachable, or a problem with queueing the
device command`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'delete',
    path: '/api/chargers/:id/weekly_charge_plan',
    alias: 'deleteApichargersIdweekly_charge_plan',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Request has missing/invalid values`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Missing authorization data. Check &quot;Authorization&quot; header`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden. Authorization set, but access to resource is denied`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Oops! Unexpected internal error. Request has been logged and code monkeys warned`,
        schema: z.void(),
      },
      {
        status: 503,
        description: `Server gateway cannot reach API. Try again in about a minute...`,
        schema: z.void(),
      },
      {
        status: 504,
        description: `Unable to deliver commands upstream. End device is not reachable, or a problem with queueing the
device command`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/api/chargers/accept',
    alias: 'postApichargersaccept',
    description: `Accept user invitation to access a charger.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'email',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'invitation_id',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/chargers/lifetime-energy/:id/all',
    alias: 'getApichargerslifetimeEnergyIdall',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
      {
        name: 'from',
        type: 'Query',
        schema: z.string().datetime({ offset: true }).optional(),
      },
      {
        name: 'to',
        type: 'Query',
        schema: z.string().datetime({ offset: true }).optional(),
      },
    ],
    response: Easee_Services_LifetimeEnergyReporting_GetAllMeasurementsResponse,
  },
  {
    method: 'put',
    path: '/api/chargers/lifetime-energy/:id/configure',
    alias: 'putApichargerslifetimeEnergyIdconfigure',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: Easee_Services_LifetimeEnergyReporting_LifetimeEnergyMeasurementSettingsRequest,
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/chargers/lifetime-energy/:id/daily',
    alias: 'getApichargerslifetimeEnergyIddaily',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
      {
        name: 'from',
        type: 'Query',
        schema: z.string().datetime({ offset: true }).nullish(),
      },
      {
        name: 'to',
        type: 'Query',
        schema: z.string().datetime({ offset: true }).nullish(),
      },
      {
        name: 'tz',
        type: 'Query',
        schema: z.string().nullish(),
      },
    ],
    response: z.array(Easee_Services_LifetimeEnergyReporting_AggregatedLifetimeEnergy),
  },
  {
    method: 'get',
    path: '/api/chargers/lifetime-energy/:id/hourly',
    alias: 'getApichargerslifetimeEnergyIdhourly',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
      {
        name: 'from',
        type: 'Query',
        schema: z.string().datetime({ offset: true }).nullish(),
      },
      {
        name: 'to',
        type: 'Query',
        schema: z.string().datetime({ offset: true }).nullish(),
      },
      {
        name: 'tz',
        type: 'Query',
        schema: z.string().nullish(),
      },
    ],
    response: z.array(Easee_Services_LifetimeEnergyReporting_AggregatedLifetimeEnergy),
  },
  {
    method: 'get',
    path: '/api/chargers/lifetime-energy/:id/monthly',
    alias: 'getApichargerslifetimeEnergyIdmonthly',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
      {
        name: 'from',
        type: 'Query',
        schema: z.string().datetime({ offset: true }).nullish(),
      },
      {
        name: 'to',
        type: 'Query',
        schema: z.string().datetime({ offset: true }).nullish(),
      },
      {
        name: 'tz',
        type: 'Query',
        schema: z.string().nullish(),
      },
    ],
    response: z.array(Easee_Services_LifetimeEnergyReporting_AggregatedLifetimeEnergy),
  },
  {
    method: 'get',
    path: '/api/chargers/lifetime-energy/:id/yearly',
    alias: 'getApichargerslifetimeEnergyIdyearly',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
      {
        name: 'from',
        type: 'Query',
        schema: z.string().datetime({ offset: true }).nullish(),
      },
      {
        name: 'to',
        type: 'Query',
        schema: z.string().datetime({ offset: true }).nullish(),
      },
      {
        name: 'tz',
        type: 'Query',
        schema: z.string().nullish(),
      },
    ],
    response: z.array(Easee_Services_LifetimeEnergyReporting_AggregatedLifetimeEnergy),
  },
  {
    method: 'get',
    path: '/api/consumption/total',
    alias: 'getApiconsumptiontotal',
    requestFormat: 'json',
    parameters: [
      {
        name: 'chargerIds',
        type: 'Query',
        schema: z.array(z.string()).nullish(),
      },
      {
        name: 'fromDateTimeUtc',
        type: 'Query',
        schema: z.string().datetime({ offset: true }).nullish(),
      },
      {
        name: 'toDateTimeUtc',
        type: 'Query',
        schema: z.string().datetime({ offset: true }).nullish(),
      },
      {
        name: 'grouping',
        type: 'Query',
        schema: z.union([z.literal(0), z.literal(1), z.literal(2)]).optional(),
      },
      {
        name: 'tz',
        type: 'Query',
        schema: z.string().nullish().default('GMT'),
      },
    ],
    response: z.array(Easee_BusinessLayer_Managers_TotalConsumption_TotalConsumptionPeriod),
  },
  {
    method: 'get',
    path: '/api/equalizers/:id',
    alias: 'getApiequalizersId',
    description: `Get equalizer.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: Easee_Core_DTOs_Equalizer_EqualizerDTO,
    errors: [
      {
        status: 404,
        description: `Not Found`,
        schema: z
          .object({
            type: z.string().nullable(),
            title: z.string().nullable(),
            status: z.number().int().nullable(),
            detail: z.string().nullable(),
            instance: z.string().nullable(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/api/equalizers/:id/commands/configure_max_allocated_current',
    alias: 'postApiequalizersIdcommandsconfigure_max_allocated_current',
    description: `Configure max allocated current for the whole charge installation
Rate limited max 1 requests per minute`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Max current allocated settings`,
        type: 'Body',
        schema: z.object({ maxCurrent: z.number().int() }).partial(),
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Request has missing/invalid values`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Missing authorization data. Check &quot;Authorization&quot; header`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden. Authorization set, but access to resource is denied`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Oops! Unexpected internal error. Request has been logged and code monkeys warned`,
        schema: z.void(),
      },
      {
        status: 503,
        description: `Server gateway cannot reach API. Try again in about a minute...`,
        schema: z.void(),
      },
      {
        status: 504,
        description: `Unable to deliver commands upstream. End device is not reachable, or a problem with queueing the
device command`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/api/equalizers/:id/commands/configure_meter_type',
    alias: 'postApiequalizersIdcommandsconfigure_meter_type',
    description: `Configure the meter type for an equalizer. To change the equalizer meter type from P1/HAN to Modbus, set &lt;i&gt;deviceMode&lt;/i&gt; to 2 and set the &lt;i&gt;externalMeterType&lt;/i&gt;(1-4)
To change the equalizer back to P1/HAN set only &lt;i&gt;deviceMode&lt;/i&gt; to 1 since &lt;i&gt;externalMeterType&lt;/i&gt; is only applicable to Modbus
Rate limited at max 1 request per minute`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Meter settings`,
        type: 'Body',
        schema: Easee_Core_DTOs_Equalizer_MeterSettingsDTO,
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Request has missing/invalid values`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Missing authorization data. Check &quot;Authorization&quot; header`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden. Authorization set, but access to resource is denied`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Oops! Unexpected internal error. Request has been logged and code monkeys warned`,
        schema: z.void(),
      },
      {
        status: 503,
        description: `Server gateway cannot reach API. Try again in about a minute...`,
        schema: z.void(),
      },
      {
        status: 504,
        description: `Unable to deliver commands upstream. End device is not reachable, or a problem with queueing the
device command`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/api/equalizers/:id/commands/reboot',
    alias: 'postApiequalizersIdcommandsreboot',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Request has missing/invalid values`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Missing authorization data. Check &quot;Authorization&quot; header`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden. Authorization set, but access to resource is denied`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Oops! Unexpected internal error. Request has been logged and code monkeys warned`,
        schema: z.void(),
      },
      {
        status: 503,
        description: `Server gateway cannot reach API. Try again in about a minute...`,
        schema: z.void(),
      },
      {
        status: 504,
        description: `Unable to deliver commands upstream. End device is not reachable, or a problem with queueing the
device command`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/api/equalizers/:id/commands/update_firmware',
    alias: 'postApiequalizersIdcommandsupdate_firmware',
    description: `Updates firmware to latest public release`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Request has missing/invalid values`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Missing authorization data. Check &quot;Authorization&quot; header`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden. Authorization set, but access to resource is denied`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Oops! Unexpected internal error. Request has been logged and code monkeys warned`,
        schema: z.void(),
      },
      {
        status: 503,
        description: `Server gateway cannot reach API. Try again in about a minute...`,
        schema: z.void(),
      },
      {
        status: 504,
        description: `Unable to deliver commands upstream. End device is not reachable, or a problem with queueing the
device command`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/api/equalizers/:id/config',
    alias: 'getApiequalizersIdconfig',
    description: `Get equalizer configuration.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: Easee_Core_DTOs_Equalizer_EqualizerConfigurationDTO,
    errors: [
      {
        status: 404,
        description: `Not Found`,
        schema: z
          .object({
            type: z.string().nullable(),
            title: z.string().nullable(),
            status: z.number().int().nullable(),
            detail: z.string().nullable(),
            instance: z.string().nullable(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/api/equalizers/:id/details',
    alias: 'getApiequalizersIddetails',
    description: `Get equalizer details.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: Easee_Core_DTOs_Equalizer_DetailedEqualizerDTO,
  },
  {
    method: 'get',
    path: '/api/equalizers/:id/site',
    alias: 'getApiequalizersIdsite',
    description: `Get equalizer site.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: Easee_Core_DTOs_Site_SiteDTO,
  },
  {
    method: 'get',
    path: '/api/resources/countries',
    alias: 'getApiresourcescountries',
    description: `Get countries.`,
    requestFormat: 'json',
    response: z.array(Easee_Core_DTOs_Site_CountryDTO),
  },
  {
    method: 'get',
    path: '/api/resources/countries/active',
    alias: 'getApiresourcescountriesactive',
    description: `Get active countries.`,
    requestFormat: 'json',
    response: z.array(Easee_Core_DTOs_Site_CountryDTO),
  },
  {
    method: 'get',
    path: '/api/resources/currencies',
    alias: 'getApiresourcescurrencies',
    description: `Get currencies.`,
    requestFormat: 'json',
    response: z.array(Easee_Core_Models_Site_Currency),
  },
  {
    method: 'get',
    path: '/api/resources/observation_properties',
    alias: 'getApiresourcesobservation_properties',
    description: `Gets all Observation Properties (ID and name).`,
    requestFormat: 'json',
    response: z.array(Easee_Core_DTOs_Charger_ObservationPropertyDTO),
  },
  {
    method: 'get',
    path: '/api/sessions/charger/:chargerId/daily',
    alias: 'getApisessionschargerChargerIddaily',
    description: `Get Daily charging sessions for a charger. Rate limited at max 20 requests per 10 minutes.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'chargerId',
        type: 'Path',
        schema: z.string().nullable(),
      },
      {
        name: 'rfidKeys',
        type: 'Query',
        schema: z.array(z.string()).nullish(),
      },
    ],
    response: z.array(Easee_Core_DTOs_Session_DailySummaryDTO),
    errors: [
      {
        status: 404,
        description: `Not Found`,
        schema: z
          .object({
            type: z.string().nullable(),
            title: z.string().nullable(),
            status: z.number().int().nullable(),
            detail: z.string().nullable(),
            instance: z.string().nullable(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/api/sessions/charger/:chargerId/hourly',
    alias: 'getApisessionschargerChargerIdhourly',
    description: `Get Hourly charging sessions for a charger. Rate limited at max 20 requests per 10 minutes.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'chargerId',
        type: 'Path',
        schema: z.string().nullable(),
      },
      {
        name: 'rfidKeys',
        type: 'Query',
        schema: z.array(z.string()).nullish(),
      },
    ],
    response: z.array(Easee_Core_DTOs_Session_HourlySummaryDTO),
    errors: [
      {
        status: 404,
        description: `Not Found`,
        schema: z
          .object({
            type: z.string().nullable(),
            title: z.string().nullable(),
            status: z.number().int().nullable(),
            detail: z.string().nullable(),
            instance: z.string().nullable(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/api/sessions/charger/:chargerId/monthly',
    alias: 'getApisessionschargerChargerIdmonthly',
    description: `Get monthly charging sessions for a charger. Rate limited at max 20 requests per 10 minutes.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'chargerId',
        type: 'Path',
        schema: z.string().nullable(),
      },
      {
        name: 'rfidKeys',
        type: 'Query',
        schema: z.array(z.string()).nullish(),
      },
    ],
    response: z.array(Easee_Core_DTOs_Session_MonthlySummaryDTO),
    errors: [
      {
        status: 404,
        description: `Not Found`,
        schema: z
          .object({
            type: z.string().nullable(),
            title: z.string().nullable(),
            status: z.number().int().nullable(),
            detail: z.string().nullable(),
            instance: z.string().nullable(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/api/sessions/charger/:chargerId/sessions/:from/:to',
    alias: 'getApisessionschargerChargerIdsessionsFromTo',
    description: `Get charging sessions for a charger for a specific period. Rate limited at max 20 requests per 10 minutes.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'chargerId',
        type: 'Path',
        schema: z.string().nullable(),
      },
      {
        name: 'from',
        type: 'Path',
        schema: z.string().datetime({ offset: true }),
      },
      {
        name: 'to',
        type: 'Path',
        schema: z.string().datetime({ offset: true }),
      },
      {
        name: 'rfidKeys',
        type: 'Query',
        schema: z.array(z.string()).nullish(),
      },
    ],
    response: z.array(Easee_Core_DTOs_Session_ChargeSessionDTO),
    errors: [
      {
        status: 404,
        description: `Not Found`,
        schema: z
          .object({
            type: z.string().nullable(),
            title: z.string().nullable(),
            status: z.number().int().nullable(),
            detail: z.string().nullable(),
            instance: z.string().nullable(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/api/sessions/charger/:chargerId/total/:from/:to',
    alias: 'getApisessionschargerChargerIdtotalFromTo',
    description: `Get power usage (kWh/amount) for a charger for a specific period.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'chargerId',
        type: 'Path',
        schema: z.string().nullable(),
      },
      {
        name: 'from',
        type: 'Path',
        schema: z.string().datetime({ offset: true }),
      },
      {
        name: 'to',
        type: 'Path',
        schema: z.string().datetime({ offset: true }),
      },
    ],
    response: z.number(),
    errors: [
      {
        status: 404,
        description: `Not Found`,
        schema: z
          .object({
            type: z.string().nullable(),
            title: z.string().nullable(),
            status: z.number().int().nullable(),
            detail: z.string().nullable(),
            instance: z.string().nullable(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/api/sessions/charger/:chargerId/yearly',
    alias: 'getApisessionschargerChargerIdyearly',
    description: `Get Yearly charging sessions for a charger. Rate limited at max 20 requests per 10 minutes.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'chargerId',
        type: 'Path',
        schema: z.string().nullable(),
      },
      {
        name: 'rfidKeys',
        type: 'Query',
        schema: z.array(z.string()).nullish(),
      },
    ],
    response: z.array(Easee_Core_DTOs_Session_YearlySummaryDTO),
    errors: [
      {
        status: 404,
        description: `Not Found`,
        schema: z
          .object({
            type: z.string().nullable(),
            title: z.string().nullable(),
            status: z.number().int().nullable(),
            detail: z.string().nullable(),
            instance: z.string().nullable(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/api/sessions/export/:siteId/:category/:from/:to',
    alias: 'getApisessionsexportSiteIdCategoryFromTo',
    description: `Get site consumption report.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
      {
        name: 'category',
        type: 'Path',
        schema: z.union([
          z.literal(0),
          z.literal(1),
          z.literal(2),
          z.literal(3),
          z.literal(4),
          z.literal(5),
          z.literal(6),
          z.literal(7),
          z.literal(8),
          z.literal(9),
          z.literal(10),
          z.literal(11),
          z.literal(12),
          z.literal(13),
          z.literal(14),
          z.literal(15),
          z.literal(16),
          z.literal(17),
          z.literal(18),
          z.literal(19),
          z.literal(20),
        ]),
      },
      {
        name: 'from',
        type: 'Path',
        schema: z.string().datetime({ offset: true }),
      },
      {
        name: 'to',
        type: 'Path',
        schema: z.string().datetime({ offset: true }),
      },
      {
        name: 'chargerId',
        type: 'Query',
        schema: z.string().nullish(),
      },
      {
        name: 'rfidKeys',
        type: 'Query',
        schema: z.array(z.string()).nullish(),
      },
      {
        name: 'tz',
        type: 'Query',
        schema: z.string().nullish(),
      },
    ],
    response: z.string(),
  },
  {
    method: 'get',
    path: '/api/sessions/user/:id/breakdown/:from/:to',
    alias: 'getApisessionsuserIdbreakdownFromTo',
    description: `Get charging sessions grouped by chargers for a user. Rate limited at max 20 requests per 10 minutes.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.number().int(),
      },
      {
        name: 'from',
        type: 'Path',
        schema: z.string().datetime({ offset: true }),
      },
      {
        name: 'to',
        type: 'Path',
        schema: z.string().datetime({ offset: true }),
      },
    ],
    response: z.array(Easee_Core_DTOs_Session_ChargingSessionDetailDTO),
    errors: [
      {
        status: 404,
        description: `Not Found`,
        schema: z
          .object({
            type: z.string().nullable(),
            title: z.string().nullable(),
            status: z.number().int().nullable(),
            detail: z.string().nullable(),
            instance: z.string().nullable(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/api/sessions/user/:id/monthly',
    alias: 'getApisessionsuserIdmonthly',
    description: `Get monthly charging sessions for a user. Rate limited at max 20 requests per 10 minutes.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.array(Easee_Core_DTOs_Session_MonthlySummaryDTO),
    errors: [
      {
        status: 404,
        description: `Not Found`,
        schema: z
          .object({
            type: z.string().nullable(),
            title: z.string().nullable(),
            status: z.number().int().nullable(),
            detail: z.string().nullable(),
            instance: z.string().nullable(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/api/sessions/user/:id/sessions/:from/:to',
    alias: 'getApisessionsuserIdsessionsFromTo',
    description: `Get charging sessions for a user for a specific period. Rate limited at max 20 requests per 10 minutes.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.number().int(),
      },
      {
        name: 'from',
        type: 'Path',
        schema: z.string().datetime({ offset: true }),
      },
      {
        name: 'to',
        type: 'Path',
        schema: z.string().datetime({ offset: true }),
      },
    ],
    response: z.array(Easee_Core_DTOs_Session_ChargeSessionDTO),
    errors: [
      {
        status: 404,
        description: `Not Found`,
        schema: z
          .object({
            type: z.string().nullable(),
            title: z.string().nullable(),
            status: z.number().int().nullable(),
            detail: z.string().nullable(),
            instance: z.string().nullable(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/api/sessions/user/:id/total/:from/:to',
    alias: 'getApisessionsuserIdtotalFromTo',
    description: `Get power usage (kWh/amount) for a user for a specific period. Rate limited at max 20 requests per 10 minutes.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.number().int(),
      },
      {
        name: 'from',
        type: 'Path',
        schema: z.string().datetime({ offset: true }),
      },
      {
        name: 'to',
        type: 'Path',
        schema: z.string().datetime({ offset: true }),
      },
    ],
    response: z.number(),
    errors: [
      {
        status: 404,
        description: `Not Found`,
        schema: z
          .object({
            type: z.string().nullable(),
            title: z.string().nullable(),
            status: z.number().int().nullable(),
            detail: z.string().nullable(),
            instance: z.string().nullable(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/api/sessions/user/:id/weekly',
    alias: 'getApisessionsuserIdweekly',
    description: `Get weekly charging sessions for a user. Rate limited at max 20 requests per 10 minutes.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.array(Easee_Core_DTOs_Session_WeeklySummaryDTO),
    errors: [
      {
        status: 404,
        description: `Not Found`,
        schema: z
          .object({
            type: z.string().nullable(),
            title: z.string().nullable(),
            status: z.number().int().nullable(),
            detail: z.string().nullable(),
            instance: z.string().nullable(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/api/sessions/user/:id/yearly',
    alias: 'getApisessionsuserIdyearly',
    description: `Get yearly charging sessions for a user. Rate limited at max 20 requests per 10 minutes.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.array(Easee_Core_DTOs_Session_YearlySummaryDTO),
    errors: [
      {
        status: 404,
        description: `Not Found`,
        schema: z
          .object({
            type: z.string().nullable(),
            title: z.string().nullable(),
            status: z.number().int().nullable(),
            detail: z.string().nullable(),
            instance: z.string().nullable(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/api/sites',
    alias: 'getApisites',
    description: `Get sites for logged in user. Offset and limits are used if &quot;search&quot; is specified.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'search',
        type: 'Query',
        schema: z.string().nullish(),
      },
      {
        name: 'offset',
        type: 'Query',
        schema: z.number().int().optional(),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().optional(),
      },
    ],
    response: z.array(Easee_Core_DTOs_Site_BasicSiteDTO),
  },
  {
    method: 'get',
    path: '/api/sites/:siteId',
    alias: 'GetSiteById',
    description: `Get a site by id.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
      {
        name: 'detailed',
        type: 'Query',
        schema: z.boolean().optional().default(true),
      },
    ],
    response: Easee_Core_DTOs_Site_DetailSiteDTO,
  },
  {
    method: 'patch',
    path: '/api/sites/:siteId',
    alias: 'patchApisitesSiteId',
    description: `More info: &lt;a&gt;http://jsonpatch.com&lt;/a&gt;&lt;br /&gt;
For example to change only &lt;b&gt;Name&lt;/b&gt; and &lt;b&gt;Site Type&lt;/b&gt; of site: &lt;br /&gt;
[
{ &quot;op&quot;: &quot;replace&quot;, &quot;path&quot;: &quot;/name&quot;, &quot;value&quot;: &quot;test site&quot; },
{ &quot;op&quot;: &quot;replace&quot;, &quot;path&quot;: &quot;/siteType&quot;, &quot;value&quot;: 2 }
]`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Site properties to update`,
        type: 'Body',
        schema: z.array(Microsoft_AspNetCore_JsonPatch_Operations_Operation).nullable(),
      },
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'delete',
    path: '/api/sites/:siteId',
    alias: 'deleteApisitesSiteId',
    description: `Delete site (Global Admin or Partner Admin).`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'put',
    path: '/api/sites/:siteId/access',
    alias: 'putApisitesSiteIdaccess',
    description: `Set access level for all chargers on a site.&lt;br /&gt; Access Level can be Everyone, Registered Users og White
Listed Users.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Access level`,
        type: 'Body',
        schema: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(1), z.literal(2), z.literal(3)]),
      },
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/sites/:siteId/breakdown/:from/:to',
    alias: 'getApisitesSiteIdbreakdownFromTo',
    description: `Get power usage and cost for all chargers on a site in a time period.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
      {
        name: 'from',
        type: 'Path',
        schema: z.string().datetime({ offset: true }),
      },
      {
        name: 'to',
        type: 'Path',
        schema: z.string().datetime({ offset: true }),
      },
    ],
    response: z.array(Easee_Core_DTOs_Session_ChargingSessionDetailDTO),
  },
  {
    method: 'get',
    path: '/api/sites/:siteId/chargers',
    alias: 'getApisitesSiteIdchargers',
    description: `Get all chargers on a site.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.array(Easee_SiteStructure_Domain_Ports_ChargerDTO),
  },
  {
    method: 'get',
    path: '/api/sites/:siteId/chargers/:chargerId/users/:userId/monthly',
    alias: 'getApisitesSiteIdchargersChargerIdusersUserIdmonthly',
    description: `Get monthly charger power usage for a user and a charger on a site.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
      {
        name: 'chargerId',
        type: 'Path',
        schema: z.string().nullable(),
      },
      {
        name: 'userId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.array(Easee_Core_DTOs_Session_MonthlySessionSummaryDTO),
  },
  {
    method: 'get',
    path: '/api/sites/:siteId/chargers/:chargerId/users/:userId/yearly',
    alias: 'getApisitesSiteIdchargersChargerIdusersUserIdyearly',
    description: `Get yearly charger power usage for a user and a charger on a site.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
      {
        name: 'chargerId',
        type: 'Path',
        schema: z.string().nullable(),
      },
      {
        name: 'userId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.array(Easee_Core_DTOs_Session_YearlySessionSummaryDTO),
  },
  {
    method: 'put',
    path: '/api/sites/:siteId/chargers/level_of_access',
    alias: 'putApisitesSiteIdchargerslevel_of_access',
    description: `Set or delete access level for specified chargers.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Chargers with Access Level`,
        type: 'Body',
        schema: z.array(Easee_Core_DTOs_Site_ChargerAccessDTO),
      },
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'post',
    path: '/api/sites/:siteId/circuit_collection',
    alias: 'postApisitesSiteIdcircuit_collection',
    description: `Create or update circuits with backplates on a site.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Circuit with Backplates`,
        type: 'Body',
        schema: z.array(Easee_Core_DTOs_Site_UpdateCircuitDTO).nullable(),
      },
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'put',
    path: '/api/sites/:siteId/circuits',
    alias: 'putApisitesSiteIdcircuits',
    description: `Update circuits on a site.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Circuit array`,
        type: 'Body',
        schema: z.array(Easee_Core_DTOs_Site_CircuitDTO).nullable(),
      },
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'post',
    path: '/api/sites/:siteId/circuits',
    alias: 'postApisitesSiteIdcircuits',
    description: `Set circuit with backplates on a site.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Circuit details`,
        type: 'Body',
        schema: Easee_Core_DTOs_Site_UpdateCircuitDTO,
      },
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'delete',
    path: '/api/sites/:siteId/circuits/:circuitId',
    alias: 'deleteApisitesSiteIdcircuitsCircuitId',
    description: `Delete an empty circuit.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
      {
        name: 'circuitId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'put',
    path: '/api/sites/:siteId/circuits/:circuitId/chargers',
    alias: 'putApisitesSiteIdcircuitsCircuitIdchargers',
    description: `Update a set of chargers on a circuit. Rate limited at max 15 request per minute.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Charger details array`,
        type: 'Body',
        schema: z.array(Easee_Core_DTOs_Charger_ChargerDTO).nullable(),
      },
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
      {
        name: 'circuitId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/sites/:siteId/circuits/:circuitId/dynamicCurrent',
    alias: 'getApisitesSiteIdcircuitsCircuitIddynamicCurrent',
    description: `Get dynamic circuit current of the primary charger`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
      {
        name: 'circuitId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: Easee_Core_DTOs_Site_DynamicCircuitCurrentDto,
  },
  {
    method: 'post',
    path: '/api/sites/:siteId/circuits/:circuitId/dynamicCurrent',
    alias: 'postApisitesSiteIdcircuitsCircuitIddynamicCurrent',
    description: `Set dynamic circuit current. &lt;br /&gt;Time to Live should be specified in minutes`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Dynamic Current Settings`,
        type: 'Body',
        schema: Easee_Core_DTOs_Site_DynamicCircuitCurrentTtlDto,
      },
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
      {
        name: 'circuitId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Request has missing/invalid values`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Missing authorization data. Check &quot;Authorization&quot; header`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden. Authorization set, but access to resource is denied`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Oops! Unexpected internal error. Request has been logged and code monkeys warned`,
        schema: z.void(),
      },
      {
        status: 503,
        description: `Server gateway cannot reach API. Try again in about a minute...`,
        schema: z.void(),
      },
      {
        status: 504,
        description: `Unable to deliver commands upstream. End device is not reachable, or a problem with queueing the
device command`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/api/sites/:siteId/circuits/:circuitId/settings',
    alias: 'postApisitesSiteIdcircuitsCircuitIdsettings',
    description: `Set circuit settings of a site. Rate limited at max 20 request per minute. &lt;br /&gt; Please only specify keys you
want to change. Endpoint handles partial JSON objects and will give a 400 response if it does not understand the
request.&lt;br /&gt;Will only forward values for dynamicCircuitCurrentP1, P2, P3 to device if new value !&#x3D; old value`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Settings`,
        type: 'Body',
        schema: Easee_Core_DTOs_Site_CircuitSettingsDTO,
      },
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
      {
        name: 'circuitId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Request has missing/invalid values`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Missing authorization data. Check &quot;Authorization&quot; header`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden. Authorization set, but access to resource is denied`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Oops! Unexpected internal error. Request has been logged and code monkeys warned`,
        schema: z.void(),
      },
      {
        status: 503,
        description: `Server gateway cannot reach API. Try again in about a minute...`,
        schema: z.void(),
      },
      {
        status: 504,
        description: `Unable to deliver commands upstream. End device is not reachable, or a problem with queueing the
device command`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/api/sites/:siteId/circuits/:circuitId/settings',
    alias: 'getApisitesSiteIdcircuitsCircuitIdsettings',
    description: `Get extended circuit settings for a site.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
      {
        name: 'circuitId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: Easee_Core_DTOs_Site_ExtendedCircuitSettingsDTO,
  },
  {
    method: 'get',
    path: '/api/sites/:siteId/circuits/:serialNumber/:pinCode',
    alias: 'getApisitesSiteIdcircuitsSerialNumberPinCode',
    description: `Check if Circuit is attached to a site.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
      {
        name: 'serialNumber',
        type: 'Path',
        schema: z.string().nullable(),
      },
      {
        name: 'pinCode',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: Easee_SiteStructure_Domain_Ports_SiteCircuitDTO,
  },
  {
    method: 'put',
    path: '/api/sites/:siteId/circuits/:serialNumber/:pinCode/:circuitName',
    alias: 'putApisitesSiteIdcircuitsSerialNumberPinCodeCircuitName',
    description: `Initiate a request to move a circuit to a new site. If the source site has an owner then a confirmation email is sent.
If the source site has no owner then the circuit will be immediately transferred to the new site`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
      {
        name: 'serialNumber',
        type: 'Path',
        schema: z.string().nullable(),
      },
      {
        name: 'pinCode',
        type: 'Path',
        schema: z.string().nullable(),
      },
      {
        name: 'circuitName',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/sites/:siteId/energy',
    alias: 'getApisitesSiteIdenergy',
    description: `Get current lifetime energy for all chargers on a site.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.array(Easee_Core_DTOs_Charger_ChargerEnergyDTO),
  },
  {
    method: 'delete',
    path: '/api/sites/:siteId/equalizers/:equalizerId',
    alias: 'deleteApisitesSiteIdequalizersEqualizerId',
    description: `Remove equalizer from a site. The api will only remove the site and master backpalte id references from databse`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
      {
        name: 'equalizerId',
        type: 'Path',
        schema: z.string().nullable(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'post',
    path: '/api/sites/:siteId/invite',
    alias: 'postApisitesSiteIdinvite',
    description: `Send site invitation to user for access to the site.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Invitation Request with user phone number and role`,
        type: 'Body',
        schema: Easee_AccessControl_Models_SitePermissionRequestDTO,
      },
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/sites/:siteId/lookup_admin',
    alias: 'getApisitesSiteIdlookup_admin',
    description: `Get user by phone number to invite to the site as administrator. (Site Admin)`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
      {
        name: 'phone_no',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: Easee_UserAdministration_Domain_DTO_BasicProfile,
  },
  {
    method: 'get',
    path: '/api/sites/:siteId/lookup_user',
    alias: 'getApisitesSiteIdlookup_user',
    description: `Get user by phone number to invite to site. (Site Admin)`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
      {
        name: 'phone_no',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: Easee_UserAdministration_Domain_DTO_BasicProfile,
  },
  {
    method: 'get',
    path: '/api/sites/:siteId/monthly',
    alias: 'getApisitesSiteIdmonthly',
    description: `Get monthly power usage and cost for charging sessions on a site.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.array(Easee_Core_DTOs_Session_MonthlySummaryDTO),
  },
  {
    method: 'post',
    path: '/api/sites/:siteId/owner',
    alias: 'postApisitesSiteIdowner',
    description: `Change site owner (Global Admin, Partner Admin or Site Owner).`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `New Owner`,
        type: 'Body',
        schema: z.object({ userId: z.number().int() }).partial(),
      },
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad Request`,
        schema: z
          .object({
            type: z.string().nullable(),
            title: z.string().nullable(),
            status: z.number().int().nullable(),
            detail: z.string().nullable(),
            instance: z.string().nullable(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 404,
        description: `Not Found`,
        schema: z
          .object({
            type: z.string().nullable(),
            title: z.string().nullable(),
            status: z.number().int().nullable(),
            detail: z.string().nullable(),
            instance: z.string().nullable(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'delete',
    path: '/api/sites/:siteId/permission',
    alias: 'deleteApisitesSiteIdpermission',
    description: `Delete user permission for a site.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
      {
        name: 'phone_no',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'email',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'put',
    path: '/api/sites/:siteId/permission',
    alias: 'putApisitesSiteIdpermission',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: Easee_Core_DTOs_Site_UpdateSitePermissionRequestDTO,
      },
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'post',
    path: '/api/sites/:siteId/price',
    alias: 'postApisitesSiteIdprice',
    description: `Set fixed cost per kWh for a site.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Fixed cost per kilowatt hour and currency id`,
        type: 'Body',
        schema: Easee_Core_DTOs_Site_SiteCostDTO,
      },
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'post',
    path: '/api/sites/:siteId/reinvite',
    alias: 'postApisitesSiteIdreinvite',
    description: `Resend site invitation to user for access to the site.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `site permisssion reinvite request`,
        type: 'Body',
        schema: Easee_AccessControl_Models_SitePermissionRequestDTO,
      },
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'post',
    path: '/api/sites/:siteId/request_access',
    alias: 'postApisitesSiteIdrequest_access',
    description: `Request site access by logged in user(installer) and send email to the site owner.
Rate limited at max 5 request per 30 minutes.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Site permission (allowed only admin or user)`,
        type: 'Body',
        schema: z.union([
          z.literal(1),
          z.literal(2),
          z.literal(3),
          z.literal(20),
          z.literal(1),
          z.literal(2),
          z.literal(3),
          z.literal(20),
        ]),
      },
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/sites/:siteId/siteGroups',
    alias: 'getApisitesSiteIdsiteGroups',
    description: `Get site groups for a site.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.array(Easee_Partners_Domain_Entities_PartnerSiteGroup),
  },
  {
    method: 'get',
    path: '/api/sites/:siteId/state',
    alias: 'GetSiteState',
    requestFormat: 'json',
    parameters: [
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: Easee_Core_DTOs_Dashboard_DashboardStateDTO,
  },
  {
    method: 'get',
    path: '/api/sites/:siteId/users',
    alias: 'getApisitesSiteIdusers',
    description: `Get all users for a site with permissions.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: Easee_UserAdministration_Domain_DTO_SitePermissionDTO,
  },
  {
    method: 'get',
    path: '/api/sites/:siteId/users/:userId/monthly',
    alias: 'getApisitesSiteIdusersUserIdmonthly',
    description: `Get monthly charger power usage for a user on a site.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
      {
        name: 'userId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.array(Easee_Core_DTOs_Session_MonthlySessionSummaryDTO),
  },
  {
    method: 'get',
    path: '/api/sites/:siteId/users/:userId/yearly',
    alias: 'getApisitesSiteIdusersUserIdyearly',
    description: `Get yearly charger power usage for a user on a site.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
      {
        name: 'userId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.array(Easee_Core_DTOs_Session_YearlySessionSummaryDTO),
  },
  {
    method: 'get',
    path: '/api/sites/:siteId/weekly',
    alias: 'getApisitesSiteIdweekly',
    description: `Get weekly power usage and cost for charging sessions on a site.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.array(Easee_Core_DTOs_Session_WeeklySummaryDTO),
  },
  {
    method: 'get',
    path: '/api/sites/:siteId/yearly',
    alias: 'getApisitesSiteIdyearly',
    description: `Get yearly power usage and cost for charging sessions on a site.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'siteId',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.array(Easee_Core_DTOs_Session_YearlySummaryDTO),
  },
  {
    method: 'post',
    path: '/api/sites/accept',
    alias: 'postApisitesaccept',
    description: `Accept site invitation for access to the site.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Site user permission invitation acceptance token`,
        type: 'Body',
        schema: z.string(),
      },
      {
        name: 'email',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'post',
    path: '/api/sites/circuits/confirm',
    alias: 'postApisitescircuitsconfirm',
    description: `Confirm a request made to move a circuit to a new site.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Confirmation token`,
        type: 'Body',
        schema: z.string().nullable(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/health',
    alias: 'getHealth',
    description: `Get API health. Mostly used by load balancer.`,
    requestFormat: 'json',
    response: z.void(),
  },
]);

export const api = new Zodios('https://api.easee.cloud', endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
