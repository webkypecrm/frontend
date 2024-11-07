

export const all_routes = {
    // dashboard routes
    salesDashboard: "/dashboard/sales-dashboard",
    supportDashboard: "/dashboard/leads-dashboard",
    staffDashboard: "/dashboard/staff-dashboard",

    //product
    product: "/product",

    //services
    services: '/services',


    //subscription
    companies: "/subscription/manage-companies",
    companiesGrid: "/subscription/manage-companies-grid",
    companyDetails: "/subscription/company-details",
    membershipplan: "/subscription/membership-plans",
    membershipAddon: "/subscription/membership-addons",
    membershipTransaction: "/subscription/membership-transactions",

    //hrms
    deleteRequest: "/hrms/delete-request",
    rolesPermissions: "/hrms/roles-permissions",
    manageStaff: "/hrms/manage-staff",
    permissions: "/hrms/permissions",
    staffDetails: "/hrms/staff-details/:staffId",

    //sales
    leads: "/sales/leads",
    leadsKanban: "/sales/leads-kanban",
    leadsDetails: "/sales/leads-details/:leadId",

    //customer
    customers:"/customer/customers",
    customerList: "/customer/customer-list",
    customerGrid: "/customer/customer-grid",
    customerDetails: "/customer/customer-details",

    //task
    tasks: "/task/tasks",
    taskDetails: "/task/task-details/:taskId",

    //setting / general setting
    connectedApps: "/setting/general-settings/connected-apps",
    notification: "/setting/general-settings/notification",
    profile: "/setting/general-settings/profile",
    security: "/setting/general-settings/security",

    //setting / website settings
    appearance: "/setting/website-settings/appearance",
    companySettings: "/setting/website-settings/company-settings",
    language: "/setting/website-settings/language",
    localization: "/setting/website-settings/localization",
    preference: "/setting/website-settings/preference",
    prefixes: "/setting/website-settings/prefixes",
    languageWeb: "/setting/website-settings/language-web",

    // setting / app settings
    customFields: "/setting/app-settings/custom-fields",
    invoiceSettings: "/setting/app-settings/invoice-settings",
    printers: "/setting/app-settings/printers",

    // setting / system settings
    emailSettings: "/setting/system-settings/email",
    gdprCookies: "/setting/system-settings/gdpr-cookies",
    smsGateways: "/setting/system-settings/sms-gateways",

    // setting / financial settings
    bankAccounts: "/setting/financial-settings/bank-account",
    currencies: "/setting/financial-settings/currencies",
    paymentGateways: "/setting/financial-settings/payment-gateways",
    taxRates: "/setting/financial-settings/tax-rates",
    // bankAccounts: "/bank-accounts",

    //setting / other settings
    banIpAddrress: "/setting/other-settings/ban-ip-address",
    storage: "/setting/other-settings/storage",

    // setting / master
    // source: "/setting/masters/source",
    // contactStage: "/setting/masters/contact-stage",
    // industry: "/setting/masters/industry",
    // calls: "/setting/masters/calls",
    // lostReason: "/setting/masters/lost-reason",

    //setup / staff-master
    department: "/setup/staff-master/department",
    role: "/setup/staff-master/role",
    group: "/setup/staff-master/group",
    jobType: "/setup/staff-master/job-type",
    workShift: "/setup/staff-master/work-shift",

    //setup / sales-master
    source: "/setup/sales-master/source",
    industry: "/setup/sales-master/industry",
    reasons: "/setup/sales-master/reasons",
    stage: "/setup/sales-master/stage",

    //setup / task-master
    taskCategory: "/setup/task-master/task-category",
    taskSubCategory: "/setup/task-master/task-sub-category",


    //support routes
    contactMessages: "/support/contact-messages",
    ticketStage: "/support/ticket-stage",


    // application routes
    todo: "/application/todo",
    email: "/application/email",
    videoCall: "/application/video-call",
    chat: "/application/chat",
    audioCall: "/application/audio-call",
    callHistory: "/application/call-history",
    fileManager: "/application/file-manager",
    calendar: "/application/calendar",
    notes: "/application/notes",

    //Marketing / Deals
    deals: "/marketing/deals",
    dealsDetails: "/marketing/deals-details",
    dealsKanban: "/marketing/deals-kanban",
    campaign: "/marketing/campaign",


    //crm routes
    activityCalls: "/crm/activity-calls",
    activityMail: "/crm/activity-mail",
    activityTask: "/crm/activity-task",
    activityMeeting: "/crm/activity-meeting",
    activities: "/crm/activities",
    payments: "/crm/payments",

    tasksImportant: "/crm/tasks-important",
    tasksCompleted: "/crm/tasks-completed",
    campaignComplete: "/crm/campaign-complete",
    campaignArchieve: "/crm/campaign-archieve",
    addCampaign: "/crm/addCampaign",
    analytics: "/crm/analytics",




    pipeline: "/crm/pipeline",
    projects: "/crm/projects",

    projectDetails: "/crm/project-details",

    // companiesGrid: "/crm/companies-grid",
    compaignComplete: "/crm/compaign-complete",

    projectsGrid: "/projects-grid",
    ProposalsList: "/crm/proposals-list",
    ProposalsGrid: "/crm/proposals-grid",
    ProposalsView: "/crm/proposals-view",
    ContractsList: "/crm/contracts-list",
    ContractsGrid: "/crm/contracts-grid",
    InvoiceList: "/crm/invoice-list",
    InvoiceGrid: "/crm/invoice-grid",
    estimationList: "/crm/estimation-list",
    estimationKanban: "/crm/estimation-kanban",



    blankPage: "/blank-page",
    dataTables: "/data-tables",
    tablesBasic: "/tables-basic",
    comingSoon: "/coming-soon",

    // auth routes routes
    login: "/login",
    register: "/register",
    forgotPassword: "/forgot-password",
    twoStepVerification: "/two-step-verification",
    success: "/success",
    emailVerification: "/email-verification",
    lockScreen: "/lock-screen",
    resetPassword: "/reset-password",

    // pages routes
    error404: "/error-404",
    error500: "/error-500",
    underMaintenance: "/under-maintenance",

    // settings routes

    // reports routes
    companyReports: "/reports/company-reports",
    contactReports: "/reports/contact-reports",
    dealReports: "/reports/deal-reports",
    leadReports: "/reports/lead-reports",
    projectReports: "/reports/project-reports",
    taskReports: "/reports/task-reports",



    //content routes
    pages: "/content/pages",
    cities: "/content/cities",
    states: "/content/states",
    testimonials: "/content/testimonials",
    countries: "/content/countries",
    faq: "/content/faq",

    //userManagement routes
    // deleteRequest: "/user-management/delete-request",
    // rolesPermissions: "/user-management/roles-permissions",
    // manageusers: "/user-management/manage-users",
    // permissions: "/user-management/permissions",


    // membership routes

};
