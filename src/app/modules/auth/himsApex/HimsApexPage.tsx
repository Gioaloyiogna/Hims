import React from 'react'
import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {MembershipPage} from './MembershipPage'
import {PlannedOutputTable} from '../../production/components/entries/planned_output/PlannedOutputTable'
import {FuelReportTable} from '../../production/components/report/fuel/CycleDetailsList'
import {ProductionReportTable} from '../../production/components/report/production_table/CycleDetailsList'
import {ActivityTable} from '../../production/components/setup/activity/ActivityTable'
import {DestinationTable} from '../../production/components/setup/destination/DestinationTable'
import {HaulerOperator} from '../../production/components/setup/haulerOperator/HaulerOperator'
import {HaulerUnit} from '../../production/components/setup/haulerUnit/HaulerUnit'
import {LoaderOperator} from '../../production/components/setup/loaderOperator/LoaderOperator'
import {LoaderUnit} from '../../production/components/setup/loaderUnit/LoaderUnit'
import {ProcessedMaterial} from '../../production/components/setup/materialProcessed/ProcessedMaterial'
import {MaterialRaw} from '../../production/components/setup/materialRaw/MaterialRaw'
import {MineArea} from '../../production/components/setup/mine_care/MineArea'
import {OriginPage} from '../../production/components/setup/origin/OriginPage'
import {ShiftPage} from '../../production/components/setup/shift/ShiftPage'
import {LoadClaimsPage} from './claimReception/LoadClaimsPage'
import {BatchClaimsPage} from './claimReception/BatchClaims'
import {BatchManualClaimsPage} from './claimReception/BatchManualClaims'
import {ClaimsreceivedPage} from './claimReception/ClaimsReceived'
import {ClaimEntriesPage} from './ClaimEntries'
import {TpaClaimsEntriesPage} from './TpaClaimEntries'
import {RefundListPage} from './refundList'
import {ClaimRefundPage} from './claimRefund'
import {BatchPage} from './process/BatchPage'
import {PaymentPage} from './account/PaymentPage'
import {JournalNote} from './account/JournalNote'
import {EntriesPage} from './crm/complaints/EntriesPage'
import {ClientPage} from './crm/complaints/ClientPage'
import {MemberPage} from './crm/complaints/MemberPage'
import {DentalOptical} from './crm/complaints/DentalOptical'
import {ProvidersPage} from './setup/ProvidersPage'
import {ReportPage} from './ReportPage'
import {BenefitPlans} from './setup/BenefitPlans'
import {DiagnosisPage} from './setup/DiagnosisPage'
import {TreatmentsPage} from './setup/TreatmentsPage'
import {RejectionReasonPage} from './setup/RejectionReasonPage'
import {RolesPage} from './systemControl/RolesPage'
import {AdminPage} from './systemControl/AdminPage'

const accountBreadCrumbs: Array<PageLink> = [
  {
    title: 'Batch Claims',
    path: '/cycle_details/cycle-details',
    isSeparator: false,
    isActive: false,
  },
  {
    title: 'Cycle Grade',
    path: '/cycle_details/cycle-grade',
    isSeparator: true,
    isActive: false,
  },
  {
    title: 'Planned Output',
    path: '/cycle_details/planned-output',
    isSeparator: true,
    isActive: false,
  },
]

const HimsApexPage: React.FC = () => {
  return (
    <Routes>
      <Route
        path='/*'
        element={
          <>
            {/*<ProductionHeader />*/}
            <Outlet />
          </>
        }
      >
        <Route
          path='membership'
          element={
            <>
              <PageTitle>Membership</PageTitle>
              {/*<Overview />*/}
              <MembershipPage />
            </>
          }
        />
        <Route
          path='pre-authorisation'
          element={
            <>
              <PageTitle>Pre-Authorisation</PageTitle>
              {/* <MembershipPage /> */}
            </>
          }
        />
        <Route index element={<Navigate to='/dashboard' />} />
      </Route>
      {/* claims reception  */}
      <Route
        path='/claimReception/*'
        element={
          <>
            {/*<ProductionHeader />*/}
            <Outlet />
          </>
        }
      >
        <Route
          path='load-claims'
          element={
            <>
              <PageTitle>Load Claims</PageTitle>
              {/*<Overview />*/}
              <LoadClaimsPage />
            </>
          }
        />
        <Route
          path='batch-claims'
          element={
            <>
              <PageTitle>Batch Claims</PageTitle>
              {/*<Overview />*/}
              <BatchClaimsPage />
            </>
          }
        />
        <Route
          path='batch-manual-claims'
          element={
            <>
              <PageTitle>Batch Manual Claims</PageTitle>
              <BatchManualClaimsPage />
            </>
          }
        />
        <Route
          path='claims-received'
          element={
            <>
              <PageTitle>Claims Received</PageTitle>
              <ClaimsreceivedPage />
            </>
          }
        />
      </Route>
      {/* end of claims reception */}

      <Route
        path='claim-entries'
        element={
          <>
            <PageTitle>Claim Entries</PageTitle>
            {/*<Overview />*/}
            <ClaimEntriesPage />
          </>
        }
      />
      <Route
        path='tpa-claim-entries'
        element={
          <>
            <PageTitle>TPA Claim Entries</PageTitle>
            {/*<Overview />*/}
            <TpaClaimsEntriesPage />
          </>
        }
      />
      <Route
        path='refund-list'
        element={
          <>
            <PageTitle>Refund List</PageTitle>
            {/*<Overview />*/}
            <RefundListPage />
          </>
        }
      />
      <Route
        path='claim-refund'
        element={
          <>
            <PageTitle>Claim Refund</PageTitle>
            {/*<Overview />*/}
            <ClaimRefundPage />
          </>
        }
      />

      <Route
        path='/process/*'
        element={
          <>
            {/*<ProductionHeader />*/}
            <Outlet />
          </>
        }
      >
        <Route
          path='batch-page'
          element={
            <>
              <PageTitle>Batch</PageTitle>

              <BatchPage />
            </>
          }
        />
      </Route>

      <Route
        path='/account/*'
        element={
          <>
            <Outlet />
          </>
        }
      >
        <Route
          path='payment-page'
          element={
            <>
              <PageTitle>Payment</PageTitle>
              {/*<Overview />*/}
              <PaymentPage />
            </>
          }
        />
        <Route
          path='journal-note'
          element={
            <>
              <PageTitle>Journal/Note</PageTitle>
              {/*<Overview />*/}
              <JournalNote />
            </>
          }
        />
      </Route>

      <Route
        path='/crm/*'
        element={
          <>
            <Outlet />
          </>
        }
      >
        <Route
          path='entries-page'
          element={
            <>
              <PageTitle>Entries</PageTitle>
              {/*<Overview />*/}
              <EntriesPage />
            </>
          }
        />
        <Route
          path='client-page'
          element={
            <>
              <PageTitle>Client</PageTitle>
              {/*<Overview />*/}
              <ClientPage />
            </>
          }
        />
        <Route
          path='member-page'
          element={
            <>
              <PageTitle>Member</PageTitle>
              {/*<Overview />*/}
              <MemberPage />
            </>
          }
        />
        <Route
          path='dental-optical'
          element={
            <>
              <PageTitle>Dental Optical</PageTitle>
              {/*<Overview />*/}
              <DentalOptical />
            </>
          }
        />
      </Route>
      <Route
        path='report-page'
        element={
          <>
            <PageTitle>HIMS-Apex Reports</PageTitle>
            {/*<Overview />*/}
            <ReportPage />
          </>
        }
      />

      <Route
        path='/setup/*'
        element={
          <>
            <Outlet />
          </>
        }
      >
        <Route
          path='providers-page'
          element={
            <>
              <PageTitle>Providers</PageTitle>
              {/*<Overview />*/}
              <ProvidersPage />
            </>
          }
        />
        <Route
          path='benefit-plans'
          element={
            <>
              <PageTitle>Benefit Plans</PageTitle>
              {/*<Overview />*/}
              <BenefitPlans />
            </>
          }
        />
        <Route
          path='diagnosis-page'
          element={
            <>
              <PageTitle>Diagnosis</PageTitle>
              {/*<Overview />*/}
              <DiagnosisPage />
            </>
          }
        />
        <Route
          path='treatment-page'
          element={
            <>
              <PageTitle>Treatments</PageTitle>
              {/*<Overview />*/}
              <TreatmentsPage />
            </>
          }
        />
        <Route
          path='rejection-reason-page'
          element={
            <>
              <PageTitle>Reasons for Rejection </PageTitle>
              {/*<Overview />*/}
              <RejectionReasonPage />
            </>
          }
        />
      </Route>

      <Route
        path='/systemControl/*'
        element={
          <>
            <Outlet />
          </>
        }
      >
        <Route
          path='roles-page'
          element={
            <>
              <PageTitle>Roles</PageTitle>
              {/*<Overview />*/}
              <RolesPage />
            </>
          }
        />
        <Route
          path='admin-page'
          element={
            <>
              <PageTitle>Admin Page</PageTitle>
              {/*<Overview />*/}
              <AdminPage />
            </>
          }
        />
      </Route>
    </Routes>
  )
}

export default HimsApexPage
