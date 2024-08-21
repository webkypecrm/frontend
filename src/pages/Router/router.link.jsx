import { Navigate, Route } from "react-router";
import { all_routes } from "./all_routes";

import SalesDashboardPage from "../Dashboard/SalesDashboardPage"
import StaffPage from '../HRMS/StaffPage'
import RolesPermissions from "../HRMS/RolesPermissions";

import LeadsPage from "../Sales/LeadsPage";
import LeadsKanban from "../Sales/LeadsKanban";

import CustomerList from "../Customer/CustomerList";
import CustomerGrid from "../Customer/CustomerGrid";
import CustomerDetails from "../Customer/CustomerDetails"

import Companies from "../Subscription/Companies";
import CompaniesGrid from "../Subscription/CompaniesGrid";
import CompaniesDetails from "../Subscription/CompaniesDetails"

import Task from "../Task/Task";

import Profile from "../Settings/General Settings/Profile";
import Security from "../Settings/General Settings/Security";
import Notifications from "../Settings/General Settings/Notifications";
import ConnectedApps from "../Settings/General Settings/ConnectedApps";

import CompanySettings from "../Settings/Website Settings/CompanySetting";
import Language from "../Settings/Website Settings/Language";
import Preference from "../Settings/Website Settings/Preference";
import Prefixes from "../Settings/Website Settings/Prefixes";
import Appearance from "../Settings/Website Settings/Appearance";
import Localization from "../Settings/Website Settings/Localization";

import CustomFields from "../Settings/App Settings/CustomFields";
import Invoice from "../Settings/App Settings/Invoice";
import Printers from "../Settings/App Settings/Printers";

import BankAccounts from "../Settings/Financial Settings/BankAccounts";
import Currencies from "../Settings/Financial Settings/Currencies";
import PaymentGateways from "../Settings/Financial Settings/PaymentGateways";
import TaxRates from "../Settings/Financial Settings/TaxRates";

import EmailSettings from "../Settings/System Settings/Email";
import GdprCookies from "../Settings/System Settings/GdprCookies";
import SmsGateways from "../Settings/System Settings/SmsGateways";

import Storage from "../Settings/Other Settings/Storage";
import BanIpAddress from "../Settings/Other Settings/BanIpAddress";

import Sources from "../Settings/Master/Sources";
import LostReason from "../Settings/Master/LostReason";
import ContactStage from "../Settings/Master/ContactStage";
import Industry from "../Settings/Master/Industry";
import Calls from "../Settings/Master/Calls";

// import ContactMessages from "../support/contactMessages";
import TicketStage from "../Support/TicketStage";

import Faq from "../Content/Faq";

import Chat from "../Application/Chat";
import VideoCall from "../Application/VideoCall";
import Todo from "../Application/ToDo";
import FileManager from "../Application/FileManager";
import CallHistory from "../Application/CallHistory";
import AudioCall from "../Application/AudioCall";
import Email from "../Application/Email";
import Notes from "../Application/Notes";
import Calendar from "../Application/Calender";

import Deals from "../Marketing/Deals";
import DealsDetails from "../Marketing/DealsDetails";
import DealsKanban from "../Marketing/DealsKanban";
import Campaign from "../Marketing/Campaign";

// import Activities from "../crm/activities";
// import Campaign from "../crm/campaign";
// import ActivityCalls from "../crm/activityCalls";
// import ActivityMail from "../crm/activityMail";
// import ActivityTask from "../crm/activityTask";
// import CampaignComplete from "../crm/campaign/campaignComplete";
// import CampaignArchieve from "../crm/campaign/campaignArchieve";
// import Analytics from "../crm/analytics";
// import ConnectedApps from "../settings/generalSettings/connectedApps";
// import Countries from "../content/location/countries";
// import ContactDetails from "../crm/contacts";
// import BankAccounts from "../settings/financialSettings/bankAccounts";
// import BlankPage from "../pages/blankPage";
// import Calendar from "../mainMenu/apps/calendar";
// import Deals from "../crm/deals";
// import DealsDetails from "../crm/deals/dealsDetails";
// import Currencies from "../settings/financialSettings/currencies";
// import DataTable from "../tables/dataTable";
// import BasicTable from "../tables/basicTable";
// import Country from "../content/countries";

// import DealReports from "../reports/dealReports";
// import DeleteRequest from "../userManagement/deleteRequest";
// import Membershipplan from "../membership/membershipplan";
// import MembershipAddon from "../membership/membershipaddon";

// import Notes from "../application/notes";
// import Cities from "../content/cities";
// import ComingSoon from "../pages/comingSoon";
// import Manageusers from "../userManagement/manageusers";
// import LockScreen from "../authentication/lockscreen";

// import Leads from "../crm/leads/leads";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
// import TwoStepVerification from "../auth/twoStepVerification";
// import EmailVerification from "../auth/emailVerification";
// import Success from "../auth/success";
// import ResetPassword from "../auth/resetPassword";
// import ForgotPassword from "../auth/forgotPassword";
// import Accordion from "../uiInterface/base-ui/accordion";
// import Avatar from "../uiInterface/base-ui/avatar";
// import Borders from "../uiInterface/base-ui/borders";
// import Breadcrumb from "../uiInterface/base-ui/breadcrumb";
// import Buttons from "../uiInterface/base-ui/buttons";
// import ButtonsGroup from "../uiInterface/base-ui/buttonsgroup";
// import Cards from "../uiInterface/base-ui/cards";
// import Carousel from "../uiInterface/base-ui/carousel";
// import Colors from "../uiInterface/base-ui/colors";
// import Dropdowns from "../uiInterface/base-ui/dropdowns";
// import Grid from "../uiInterface/base-ui/grid";
// import Images from "../uiInterface/base-ui/images";
// import Lightboxes from "../uiInterface/base-ui/lightbox";
// import Media from "../uiInterface/base-ui/media";
// import Modals from "../uiInterface/base-ui/modals";
// import NavTabs from "../uiInterface/base-ui/navtabs";
// import Offcanvas from "../uiInterface/base-ui/offcanvas";
// import Pagination from "../uiInterface/base-ui/pagination";
// import Popovers from "../uiInterface/base-ui/popover";
// import RangeSlides from "../uiInterface/base-ui/rangeslider";
// import Progress from "../uiInterface/base-ui/progress";
// import Spinner from "../uiInterface/base-ui/spinner";
// import Toasts from "../uiInterface/base-ui/toasts";
// import Typography from "../uiInterface/base-ui/typography";
// import Video from "../uiInterface/base-ui/video";
// import Error404 from "../pages/error/error-404";
// import Error500 from "../pages/error/error-500";


// import PaymentGateways from "../settings/financialSettings/paymentGateways";
// import UnderMaintenance from "../pages/underMaintenance";
// import LeadsDashboard from "../mainMenu/leadsDashboard";
// import Todo from "../application/todo";
// import Email from "../application/email";
// import VideoCall from "../application/call/videoCall";
// import Chat from "../application/chat";
// import Pages from "../content/pages";
// import ProjectDashboard from "../mainMenu/projectDashboard";
// import ContactList from "../crm/contacts/contactList";
// import CompanyReport from "../reports/companyReport";
// import ContactReport from "../reports/contactReport";
// import LeadReport from "../reports/leadReport";
// import ProjectReport from "../reports/projectReport";
// import TaskReport from "../reports/taskReport";
// import AudioCall from "../application/call/audioCall";
// import CallHistory from "../application/call/callHistory";
// import FileManager from "../application/fileManager";

// import MembershipTransaction from "../membership/membershiptrasaction";
// import LeadsKanban from "../crm/leads/leadskanban";
// import Calls from "../crmSetting/calls";
// import Industry from "../crmSetting/industry";
// import Sources from "../crmSetting/sources";
// import ContactStage from "../crmSetting/contactStage";
// // import BanIpAddress from "../settings/otherSettings/banIpaddress";
// // import LostReason from "../crmSetting/lostreason";


// import LostReason from "../crmSetting/lostReason";

// import CompaniesGrid from "../crm/companies/companiesGrid";
// import Pipeline from "../crm/pipeline";
// import Projects from "../crm/projects";
// import Task from "../crm/task";

// import States from "../content/states";
// import Testimonials from "../content/testimonials";
// import ClipBoard from "../uiInterface/advanced-ui/clipboard";
// import Counter from "../uiInterface/advanced-ui/counter";
// import DragAndDrop from "../uiInterface/advanced-ui/dragdrop";
// import Rating from "../uiInterface/advanced-ui/rating";
// import Stickynote from "../uiInterface/advanced-ui/stickynote";
// import TextEditor from "../uiInterface/advanced-ui/texteditor";
// import Timeline from "../uiInterface/advanced-ui/timeline";
// import Scrollbar from "../uiInterface/advanced-ui/uiscrollbar";
// import Apexchart from "../uiInterface/charts/apexcharts";
// import FeatherIcons from "../uiInterface/icons/feathericon";
// import FontawesomeIcons from "../uiInterface/icons/fontawesome";
// import MaterialIcons from "../uiInterface/icons/materialicon";
// import PE7Icons from "../uiInterface/icons/pe7icons";
// import SimplelineIcons from "../uiInterface/icons/simplelineicon";
// import ThemifyIcons from "../uiInterface/icons/themify";
// import TypiconIcons from "../uiInterface/icons/typicons";
// import WeatherIcons from "../uiInterface/icons/weathericons";
// import BasicInputs from "../uiInterface/forms/formelements/basic-inputs";
// import CheckboxRadios from "../uiInterface/forms/formelements/checkbox-radios";
// import InputGroup from "../uiInterface/forms/formelements/input-group";
// import GridGutters from "../uiInterface/forms/formelements/grid-gutters";
// import FormSelect from "../uiInterface/forms/formelements/form-select";
// import FormMask from "../uiInterface/forms/formelements/form-mask";
// import FileUpload from "../uiInterface/forms/formelements/fileupload";
// import FormHorizontal from "../uiInterface/forms/formelements/layouts/form-horizontal";
// import FormVertical from "../uiInterface/forms/formelements/layouts/form-vertical";
// import FloatingLabel from "../uiInterface/forms/formelements/layouts/floating-label";
// import FormValidation from "../uiInterface/forms/formelements/layouts/form-validation";
// import FormSelect2 from "../uiInterface/forms/formelements/layouts/form-select2";
// import FormWizard from "../uiInterface/forms/formelements/form-wizard";
// import DataTables from "../uiInterface/table/data-tables";
// import TablesBasic from "../uiInterface/table/tables-basic";
// import IonicIcons from "../uiInterface/icons/ionicicons";
// import TasksImportant from "../crm/task/tasksImportant";
// import TaskCompleted from "../crm/task/taskCompleted";
// import ActivityMetting from "../crm/activityMetting";
// import Payments from "../crm/payments";
// import Proposalslist from "../crm/proposals/proposalslist";
// import Proposalsgrid from "../crm/proposals/proposalsgrid";
// import ProposalsView from "../crm/proposals/proposalsview";
// import Contractslist from "../crm/contracts/contracts-list";
// import ContractsGrid from "../crm/contracts/contracts-grid";
// import InvoiceList from "../crm/invoices/invoicelist";
// import InvoiceGrid from "../crm/invoices/invoicegrid";
// import EstimationList from "../crm/estimations/estimation-list";
// import EstimationKanban from "../crm/estimations/estimation-kanban";
// import Badges from "../uiInterface/base-ui/badges";
// import BanIpAddress from "../settings/otherSettings/banIpaddress";
// import Placeholder from "../uiInterface/base-ui/placeholder";
// import Alert from "../uiInterface/base-ui/alert";
// import Tooltips from "../uiInterface/base-ui/tooltips";
// import Ribbon from "../uiInterface/advanced-ui/ribbon";

const route = all_routes;

export const publicRoutes = [
    {
        path: route.salesDashboard,
        element: <SalesDashboardPage />,
        route: Route,
    },
    {
        path: '/',
        name: 'Root',
        element: <Navigate to="/login" />,
    },
    {
        path: route.manageStaff,
        element: <StaffPage />,
    },
    {
        path: route.rolesPermissions,
        element: <RolesPermissions />,
    },
    {
        path: route.leads,
        element: <LeadsPage />,
    },
    {
        path: route.leadsKanban,
        element: <LeadsKanban />,
    },
    {
        path: route.customerList,
        element: <CustomerList />,
    },
    {
        path: route.customerGrid,
        element: <CustomerGrid />,

    },
    {
        path: route.customerDetails,
        element: <CustomerDetails />,
    },
    {
        path: route.companies,
        element: <Companies />,
    },
    {
        path: route.companiesGrid,
        element: <CompaniesGrid />,
    },
    {
        path: route.companyDetails,
        element: <CompaniesDetails />,
    },
    {
        path: route.tasks,
        element: <Task />,
    },
    {
        path: route.sources,
        element: <Sources />,
    },
    {
        path: route.lostReason,
        element: <LostReason />,
    },
    {
        path: route.contactStage,
        element: <ContactStage />,
    },
    {
        path: route.industry,
        element: <Industry />,
    },
    {
        path: route.calls,
        element: <Calls />,
    },
    {
        path: route.connectedApps,
        element: <ConnectedApps />,
    },
    {
        path: route.notification,
        element: <Notifications />,
    },
    {
        path: route.profile,
        element: <Profile />,
    },
    {
        path: route.security,
        element: <Security />,
    },
    {
        path: route.appearance,
        element: <Appearance />,
    },
    {
        path: route.companySettings,
        element: <CompanySettings />,
    },
    {
        path: route.language,
        element: <Language />,
    },
    {
        path: route.localization,
        element: <Localization />,
    },
    {
        path: route.preference,
        element: <Preference />,
    },
    {
        path: route.prefixes,
        element: <Prefixes />,
    },
    {
        path: route.invoiceSettings,
        element: <Invoice />,
    },
    {
        path: route.currencies,
        element: <Currencies />,
    },
    {
        path: route.customFields,
        element: <CustomFields />,
    },
    {
        path: route.printers,
        element: <Printers />,
    },
    {
        path: route.bankAccount,
        element: <BankAccounts />,
    },
    {
        path: route.currencies,
        element: <Currencies />,
    },
    {
        path: route.paymentGateways,
        element: <PaymentGateways />,
    },
    {
        path: route.taxRates,
        element: <TaxRates />,
    },
    {
        path: route.banIpAddrress,
        element: <BanIpAddress />,
    },
    {
        path: route.storage,
        element: <Storage />,
    },
    {
        path: route.emailSettings,
        element: <EmailSettings />,
    },
    {
        path: route.gdprCookies,
        element: <GdprCookies />,
    },
    {
        path: route.smsGateways,
        element: <SmsGateways />,
    },
    {
        path: route.faq,
        element: <Faq />,
    },
    //   {
    //     path: route.contactMessages,
    //     element: <ContactMessages />,
    //     route: Route,
    //   },
    {
        path: route.ticketStage,
        element: <TicketStage />,
    },
    {
        path: route.audioCall,
        element: <AudioCall />,
    },
    {
        path: route.callHistory,
        element: <CallHistory />,
    },
    {
        path: route.todo,
        element: <Todo />,
    },
    {
        path: route.email,
        element: <Email />,
    },
    {
        path: route.videoCall,
        element: <VideoCall />,
    },
    {
        path: route.chat,
        element: <Chat />,
    },
    {
        path: route.fileManager,
        element: <FileManager />,
    },
    {
        path: route.notes,
        element: <Notes />,
    },
    {
        path: route.calendar,
        element: <Calendar />,
    },

    {
        path: route.deals,
        element: <Deals />,
    },
    {
        path: route.dealsDetails,
        element: <DealsDetails />,
    },
    {
        path: route.dealsKanban,
        element: <DealsKanban />,
    },
    {
        path: route.campaign,
        element: <Campaign />,
    },

    //   {
    //     path: route.callHistory,
    //     element: <CallHistory />,
    //     route: Route,
    //   },
    //   {
    //     path: route.activities,
    //     element: <Activities />,
    //     route: Route,
    //   },

    //   {
    //     path: route.activityMeeting,
    //     element: <ActivityMetting />,
    //     route: Route,
    //   },
    //   {
    //     path: route.activityCalls,
    //     element: <ActivityCalls />,
    //     route: Route,
    //   },
    //   {
    //     path: route.activityMail,
    //     element: <ActivityMail />,
    //     route: Route,
    //   },
    //   {
    //     path: route.activityTask,
    //     element: <ActivityTask />,
    //     route: Route,
    //   },
    //   {
    //     path: route.campaignComplete,
    //     element: <CampaignComplete />,
    //     route: Route,
    //   },
    //   {
    //     path: route.campaignArchieve,
    //     element: <CampaignArchieve />,
    //     route: Route,
    //   },
    //   {
    //     path: route.appearance,
    //     element: <Appearance />,
    //     route: Route,
    //   },
    //   {
    //     path: route.analytics,
    //     element: <Analytics />,
    //     route: Route,
    //   },
    //   {
    //     path: route.connectedApps,
    //     element: <ConnectedApps />,
    //     route: Route,
    //   },
    //   {
    //     path: route.countries,
    //     element: <Country />,
    //     route: Route,
    //   },

    //   {
    //     path: route.bankAccounts,
    //     element: <BankAccounts />,
    //     route: Route,
    //   },
    //   {
    //     path: route.blankPage,
    //     element: <BlankPage />,
    //     route: Route,
    //   },

    //   {
    //     path: route.manageusers,
    //     element: <Manageusers />,
    //   },

    //   {
    //     path: route.membershipplan,
    //     element: <Membershipplan />,
    //   },
    //   {
    //     path: route.membershipAddon,
    //     element: <MembershipAddon />,
    //   },
    //   {
    //     path: route.membershipTransaction,
    //     element: <MembershipTransaction />,
    //   },


    //   {
    //     path: route.countries,
    //     element: <Countries />,
    //     route: Route,
    //   },
    //   {

    //   {
    //     path: route.dataTables,
    //     element: <DataTable />,
    //     route: Route,
    //   },
    //   {
    //     path: route.tablesBasic,
    //     element: <BasicTable />,
    //     route: Route,
    //   },
    //   {
    //     path: route.dealReports,
    //     element: <DealReports />,
    //     route: Route,
    //   },


    //   {
    //     path: route.deleteRequest,
    //     element: <DeleteRequest />,
    //     route: Route,
    //   },
    //   {
    //     path: route.cities,
    //     element: <Cities />,
    //     route: Route,
    //   },
    //   
    //   { path: route.localization, element: <Localization />, route: Route },
    //   {
    //     path: route.leadsDetails,
    //     element: <LeadsDetails />,
    //     route: Route,
    //   },
    //   {
    //     path: route.leads,
    //     element: <Leads />,
    //     route: Route,
    //   },
    //   {
    //     path: route.companies,
    //     element: <Companies />,
    //     route: Route,
    //   },
    //   {
    //     path: route.accordion,
    //     element: <Accordion />,
    //     route: Route,
    //   },
    //   {
    //     path: route.avatar,
    //     element: <Avatar />,
    //     route: Route,
    //   },
    //   {
    //     path: route.badges,
    //     element: <Badges />,
    //     route: Route,
    //   },
    //   {
    //     path: route.border,
    //     element: <Borders />,
    //     route: Route,
    //   },
    //   {
    //     path: route.breadcrums,
    //     element: <Breadcrumb />,
    //     route: Route,
    //   },
    //   {
    //     path: route.button,
    //     element: <Buttons />,
    //     route: Route,
    //   },
    //   {
    //     path: route.buttonGroup,
    //     element: <ButtonsGroup />,
    //     route: Route,
    //   },
    //   {
    //     path: route.cards,
    //     element: <Cards />,
    //     route: Route,
    //   },
    //   {
    //     path: route.carousel,
    //     element: <Carousel />,
    //     route: Route,
    //   },
    //   {
    //     path: route.colors,
    //     element: <Colors />,
    //     route: Route,
    //   },
    //   {
    //     path: route.dropdowns,
    //     element: <Dropdowns />,
    //     route: Route,
    //   },
    //   {
    //     path: route.grid,
    //     element: <Grid />,
    //     route: Route,
    //   },
    //   {
    //     path: route.images,
    //     element: <Images />,
    //     route: Route,
    //   },
    //   {
    //     path: route.lightbox,
    //     element: <Lightboxes />,
    //     route: Route,
    //   },
    //   {
    //     path: route.media,
    //     element: <Media />,
    //     route: Route,
    //   },
    //   {
    //     path: route.modals,
    //     element: <Modals />,
    //     route: Route,
    //   },
    //   {
    //     path: route.navTabs,
    //     element: <NavTabs />,
    //     route: Route,
    //   },
    //   {
    //     path: route.offcanvas,
    //     element: <Offcanvas />,
    //     route: Route,
    //   },
    //   {
    //     path: route.pagination,
    //     element: <Pagination />,
    //     route: Route,
    //   },
    //   {
    //     path: route.popover,
    //     element: <Popovers />,
    //     route: Route,
    //   },
    //   {
    //     path: route.rangeSlider,
    //     element: <RangeSlides />,
    //     route: Route,
    //   },
    //   {
    //     path: route.progress,
    //     element: <Progress />,
    //     route: Route,
    //   },
    //   {
    //     path: route.spinner,
    //     element: <Spinner />,
    //     route: Route,
    //   },

    //   {
    //     path: route.typography,
    //     element: <Typography />,
    //     route: Route,
    //   },
    //   {
    //     path: route.video,
    //     element: <Video />,
    //     route: Route,
    //   },
    //   {
    //     path: route.toasts,
    //     element: <Toasts />,
    //     route: Route,
    //   },


    //   {
    //     path: route.leadsDashboard,
    //     element: <LeadsDashboard />,
    //     route: Route,
    //   },
    //   {
    //     path: route.projectDashboard,
    //     element: <ProjectDashboard />,
    //     route: Route,
    //   },

    //   {
    //     path: route.pages,
    //     element: <Pages />,
    //     route: Route,
    //   },

    //   {
    //     path: route.companyReports,
    //     element: <CompanyReport />,
    //     route: Route,
    //   },
    //   {
    //     path: route.contactReports,
    //     element: <ContactReport />,
    //     route: Route,
    //   },
    //   {
    //     path: route.dealReports,
    //     element: <DealReports />,
    //     route: Route,
    //   },
    //   {
    //     path: route.leadReports,
    //     element: <LeadReport />,
    //     route: Route,
    //   },
    //   {
    //     path: route.projectReports,
    //     element: <ProjectReport />,
    //     route: Route,
    //   },
    //   {
    //     path: route.taskReports,
    //     element: <TaskReport />,
    //     route: Route,
    //   },

    //   {
    //     path: route.contactStage,
    //     element: <ContactStage />,
    //     route: Route,
    //   },

    //   
    //   {
    //     path: route.deleteRequest,
    //     element: <DeleteRequest />,
    //     route: Route,
    //   },
    //   



    //  

    //   {
    //     path: route.pipeline,
    //     element: <Pipeline />,
    //     route: Route,
    //   },
    //   {
    //     path: route.projects,
    //     element: <Projects />,
    //     route: Route,
    //   },


    //   {
    //     path: route.states,
    //     element: <States />,
    //     route: Route,
    //   },
    //   {
    //     path: route.testimonials,
    //     element: <Testimonials />,
    //     route: Route,
    //   },
    //   {
    //     path: route.clipboard,
    //     element: <ClipBoard />,
    //     route: Route,
    //   },
    //   {
    //     path: route.counter,
    //     element: <Counter />,
    //     route: Route,
    //   },
    //   {
    //     path: route.dragandDrop,
    //     element: <DragAndDrop />,
    //     route: Route,
    //   },
    //   {
    //     path: route.rating,
    //     element: <Rating />,
    //     route: Route,
    //   },
    //   {
    //     path: route.stickyNotes,
    //     element: <Stickynote />,
    //     route: Route,
    //   },
    //   {
    //     path: route.textEditor,
    //     element: <TextEditor />,
    //     route: Route,
    //   },
    //   {
    //     path: route.timeLine,
    //     element: <Timeline />,
    //     route: Route,
    //   },
    //   {
    //     path: route.scrollBar,
    //     element: <Scrollbar />,
    //     route: Route,
    //   },
    //   {
    //     path: route.scrollBar,
    //     element: <Scrollbar />,
    //     route: Route,
    //   },
    //   {
    //     path: route.apexChat,
    //     element: <Apexchart />,
    //     route: Route,
    //   },
    //   {
    //     path: route.featherIcons,
    //     element: <FeatherIcons />,
    //     route: Route,
    //   },
    //   {
    //     path: route.falgIcons,
    //     element: <FeatherIcons />,
    //     route: Route,
    //   },
    //   {
    //     path: route.fantawesome,
    //     element: <FontawesomeIcons />,
    //     route: Route,
    //   },
    //   {
    //     path: route.fantawesome,
    //     element: <FontawesomeIcons />,
    //     route: Route,
    //   },
    //   {
    //     path: route.materialIcon,
    //     element: <MaterialIcons />,
    //     route: Route,
    //   },
    //   {
    //     path: route.pe7icon,
    //     element: <PE7Icons />,
    //     route: Route,
    //   },
    //   {
    //     path: route.simpleLineIcon,
    //     element: <SimplelineIcons />,
    //     route: Route,
    //   },
    //   {
    //     path: route.themifyIcon,
    //     element: <ThemifyIcons />,
    //     route: Route,
    //   },
    //   {
    //     path: route.typicon,
    //     element: <TypiconIcons />,
    //     route: Route,
    //   },
    //   {
    //     path: route.basicInput,
    //     element: <BasicInputs />,
    //     route: Route,
    //   },
    //   {
    //     path: route.weatherIcon,
    //     element: <WeatherIcons />,
    //     route: Route,
    //   },
    //   {
    //     path: route.checkboxandRadion,
    //     element: <CheckboxRadios />,
    //     route: Route,
    //   },
    //   {
    //     path: route.inputGroup,
    //     element: <InputGroup />,
    //     route: Route,
    //   },
    //   {
    //     path: route.gridandGutters,
    //     element: <GridGutters />,
    //     route: Route,
    //   },
    //   {
    //     path: route.formSelect,
    //     element: <FormSelect />,
    //     route: Route,
    //   },
    //   {
    //     path: route.formMask,
    //     element: <FormMask />,
    //     route: Route,
    //   },
    //   {
    //     path: route.fileUpload,
    //     element: <FileUpload />,
    //     route: Route,
    //   },
    //   {
    //     path: route.horizontalForm,
    //     element: <FormHorizontal />,
    //     route: Route,
    //   },
    //   {
    //     path: route.verticalForm,
    //     element: <FormVertical />,
    //     route: Route,
    //   },
    //   {
    //     path: route.floatingLable,
    //     element: <FloatingLabel />,
    //     route: Route,
    //   },
    //   {
    //     path: route.formValidation,
    //     element: <FormValidation />,
    //     route: Route,
    //   },
    //   {
    //     path: route.reactSelect,
    //     element: <FormSelect2 />,
    //     route: Route,
    //   },
    //   {
    //     path: route.formWizard,
    //     element: <FormWizard />,
    //     route: Route,
    //   },
    //   {
    //     path: route.formWizard,
    //     element: <DataTables />,
    //     route: Route,
    //   },
    //   {
    //     path: route.dataTable,
    //     element: <DataTables />,
    //     route: Route,
    //   },
    //   {
    //     path: route.tableBasic,
    //     element: <TablesBasic />,
    //     route: Route,
    //   },
    //   {
    //     path: route.iconicIcon,
    //     element: <IonicIcons />,
    //     route: Route,
    //   },
    //   // {
    //   //   path: route.chart,
    //   //   element: <ChartJs />,
    //   //   route: Route,
    //   // },
    //   {
    //     path: route.tasksImportant,
    //     element: <TasksImportant />,
    //     route: Route,
    //   },
    //   {
    //     path: route.tasksCompleted,
    //     element: <TaskCompleted />,
    //     route: Route,
    //   },
    //   {
    //     path: route.ProposalsList,
    //     element: <Proposalslist />,
    //     route: Route,
    //   },
    //   {
    //     path: route.ProposalsGrid,
    //     element: <Proposalsgrid />,
    //     route: Route,
    //   },
    //   {
    //     path: route.ProposalsView,
    //     element: <ProposalsView />,
    //     route: Route,
    //   },
    //   {
    //     path: route.ContractsList,
    //     element: <Contractslist />,
    //     route: Route,
    //   },
    //   {
    //     path: route.ContractsGrid,
    //     element: <ContractsGrid />,
    //     route: Route,
    //   },
    //   {
    //     path: route.payments,
    //     element: <Payments />,
    //     route: Route,
    //   },
    //   {
    //     path: route.InvoiceList,
    //     element: <InvoiceList />,
    //     route: Route,
    //   },
    //   {
    //     path: route.InvoiceGrid,
    //     element: <InvoiceGrid />,
    //     route: Route,
    //   },
    //   {
    //     path: route.estimationList,
    //     element: <EstimationList />,
    //     route: Route,
    //   },
    //   {
    //     path: route.estimationKanban,
    //     element: <EstimationKanban />,
    //     route: Route,
    //   },
    //   {
    //     path: route.placeholder,
    //     element: <Placeholder />,
    //     route: Route,
    //   },
    //   {
    //     path: route.sweetalert,
    //     element: <Alert />,
    //     route: Route,
    //   },
    //   {
    //     path: route.tooltip,
    //     element: <Tooltips />,
    //     route: Route,
    //   },
    //   {
    //     path: route.ribbon,
    //     element: <Ribbon />,
    //     route: Route,
    //   },
];

export const authRoutes = [
    //   {
    //     path: route.comingSoon,
    //     element: <ComingSoon />,
    //     route: Route,
    //   },
    {
        path: route.login,
        element: <Login />,
    },
    {
        path: route.register,
        element: <Register />,
    },
    //   {
    //     path: route.twoStepVerification,
    //     element: <TwoStepVerification />,
    //     route: Route,
    //   },
    //   {
    //     path: route.emailVerification,
    //     element: <EmailVerification />,
    //     route: Route,
    //   },
    //   {
    //     path: route.success,
    //     element: <Success />,
    //     route: Route,
    //   },
    //   {
    //     path: route.register,
    //     element: <Register />,
    //     route: Route,
    //   },
    //   {
    //     path: route.resetPassword,
    //     element: <ResetPassword />,
    //     route: Route,
    //   },
    //   {
    //     path: route.forgotPassword,
    //     element: <ForgotPassword />,
    //     route: Route,
    //   },
    //   {
    //     path: route.error404,
    //     element: <Error404 />,
    //     route: Route,
    //   },
    //   {
    //     path: route.error500,
    //     element: <Error500 />,
    //     route: Route,
    //   },
    //   {
    //     path: route.underMaintenance,
    //     element: <UnderMaintenance />,
    //     route: Route,
    //   },
    //   {
    //     path: route.lockScreen,
    //     element: <LockScreen />,
    //   },
];
