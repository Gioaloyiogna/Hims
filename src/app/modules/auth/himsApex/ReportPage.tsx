import {ReportCard} from './ReportCard'
import {sampleComponent} from './claimReception/LoadClaimsPage'


const ReportPage = () => {
  const HimsApexReportData = [
    {
      title: 'Membership',
      reports: [
        {title: 'Detail', link: '/'},
        {title: 'Summary', link: '/'},
        {title: 'Consolidated', link: '/'},
        {title: 'Client Complaint Log', link: '/'},
        {title: 'Provider Complaint Log', link: '/'},
        {title: 'Member Complaint Log', link: '/'},
        {title: 'Dental And Optical Authorization Log', link: '/'},
      ],
    },

    {
      title: 'Utilization',
      reports: [
        {title: 'Date', link: '/'},
        {title: 'Batch', link: '/'},
        {title: 'Service Provider', link: '/'},
        {title: 'Company Utilization Summary', link: '/'},
        {title: 'Company Utilization Detail', link: '/'},
      ],
    },

    {
      title: 'Management Analysis',
      reports: [
        {title: 'Plan', link: '/'},
        {title: 'Provider', link: '/'},
        {title: 'Client Benefits', link: '/'},
        {title: 'Treatment', link: '/'},
        {title: 'Member', link: '/'},
      ],
    },

    {
      title: 'RX',
      reports: [
        {title: 'Date detail', link: '/'},
        {title: 'Date Summary', link: '/'},
        {title: 'Service Provider Detail', link: '/'},
        {title: 'Service Provider Summary', link: '/'},
        {title: 'Data Excluded', link: '/'},
        {title: 'Data Duplication', link: '/'},
        {title: 'Service Provider Claimed Amount Summary', link: '/'},
        {title: 'Service Provider Payment Summary', link: '/'},
      ],
    },

    {
      title: 'Claims',
      reports: [
        {title: 'Client Summary', link: '/'},
        {title: 'Client Claim Summary', link: '/'},
        {title: 'Member Detail', link: '/'},
        {title: 'Claim Detail', link: '/'},
        {title: 'Provider Summary', link: '/'},
        {title: 'Provider Summary by Treatment', link: '/'},
        {title: 'Provider Detail', link: '/'},
        {title: 'Batch', link: '/'},
        {title: 'Provider Batch Detail', link: '/'},
        {title: 'TPA Batch Detail', link: '/'},
        {title: 'Vetting', link: '/'},
        {title: 'Vetting Detail', link: '/'},
        {title: 'Provider Payment Advice', link: '/'},
      ],
    },

    {
      title: 'Accounting',
      reports: [
        {title: 'Daybooks', link: '/'},
        {title: 'Daybooks Summary', link: '/'},
        {title: 'Account Balance Provider', link: '/'},
        {title: 'Account Statement Provider', link: '/'},
        {title: 'Account Statement Provider Group', link: '/'},
        {title: 'Unaudited Provider Claim Balance', link: '/'},
      ],
    },
  ]

  return (
    <div>
      <div className='row col-12 mb-10'>
        {HimsApexReportData.map((report, index) => {
          return (
            <div className='col-4' key={index}>
              <ReportCard data={report} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export {ReportPage}
