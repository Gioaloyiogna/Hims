/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem, AsideMenuItem2} from './AsideMenuItem'
import {Link} from 'react-router-dom'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />

      <AsideMenuItem
        to='himsApex/membership'
        icon='/media/icons/duotune/communication/com014.svg'
        title='Membership'
        fontIcon='bi-app-indicator'
      />

      <AsideMenuItem
        to='himsApex/pre-Authorisation'
        title='Pre-Authorisation'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/files/fil003.svg'
      />
      <AsideMenuItemWithSub
        to='#'
        title='Claim Reception'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/files/fil012.svg'
      >
        <AsideMenuItem
          to='himsApex/claimReception/load-claims'
          title='Load Claims'
          hasBullet={true}
        />
        <AsideMenuItem
          to='himsApex/claimReception/batch-claims'
          title='Batch Claims'
          hasBullet={true}
        />
        <AsideMenuItem
          to='himsApex/claimReception/batch-manual-claims'
          title='Batch Manual Claims'
          hasBullet={true}
        />
        <AsideMenuItem
          to='himsApex/claimReception/claims-received'
          title='Claims Received'
          hasBullet={true}
        />
      </AsideMenuItemWithSub>
      <AsideMenuItem
        to='himsApex/claim-entries'
        title='Claim Entries'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/abstract/abs015.svg'
      />

      <AsideMenuItem
        to='himsApex/tpa-claim-entries'
        title='TPA Claim Entries'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/abstract/abs015.svg'
      />
      <AsideMenuItem
        to='himsApex/refund-list'
        title='Refund List'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/abstract/abs015.svg'
      />
      <AsideMenuItem
        to='himsApex/claim-refund'
        title='Claim Refund'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/abstract/abs015.svg'
      />
      <AsideMenuItemWithSub
        to='#'
        title='Process'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen008.svg'
      >
        <AsideMenuItem to='himsApex/process/batch-page' title='Batch' hasBullet={true} />
      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub
        to='#'
        title='Account'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen008.svg'
      >
        <AsideMenuItem to='himsApex/account/payment-page' title='Payment' hasBullet={true} />
        <AsideMenuItem to='himsApex/account/journal-note' title='Journal/Note' hasBullet={true} />
      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub
        to='#'
        title='CRM'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/communication/com013.svg'
      >
        <AsideMenuItemWithSub
          to='#'
          title='Complaints'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/graphs/gra008.svg'
        >
          <AsideMenuItem to='himsApex/crm/entries-page' title='Entries' hasBullet={true} />
          <AsideMenuItem to='himsApex/crm/client-page' title='Client' hasBullet={true} />
          <AsideMenuItem to='himsApex/crm/member-page' title='Member' hasBullet={true} />
          <AsideMenuItem to='himsApex/crm/dental-optical' title='Dental Optical' hasBullet={true} />
        </AsideMenuItemWithSub>
      </AsideMenuItemWithSub>

      {/* <AsideMenuItem
        to='#'
        icon='/media/icons/duotune/graphs/gra001.svg'
        title='Reports'
        fontIcon='bi-app-indicator'
      /> */}

      <AsideMenuItem2
        href='https://app.sipconsult.net/himsreporting'
        title='Reports'
        hasBullet={false}
        fontIcon='bi-archive'
        icon='/media/icons/duotune/graphs/gra005.svg'
        to={''}
      />

      {/* <a
        style={{marginLeft: '30px', color: 'grey' fontIcon='bi-archive'
          icon='/media/icons/duotune/graphs/gra008.svg'}}
        href='https://app.sipconsult.net/himsreporting'
      >
        Reports
      </a> */}

      {/* <AsideMenuItem
        to='himsApex/report-page'
        icon='/media/icons/duotune/graphs/gra001.svg'
        title='Reports'
        fontIcon='bi-app-indicator'
      /> */}

      <AsideMenuItemWithSub
        to='#'
        title='Setup'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/graphs/gra008.svg'
      >
        <AsideMenuItem
          to='himsApex/setup/providers-page'
          title='Providers'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/graphs/gra008.svg'
        />
        <AsideMenuItem
          to='himsApex/setup/benefit-plans'
          title='Benefit Plans'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/graphs/gra008.svg'
        />
        <AsideMenuItem
          to='himsApex/setup/diagnosis-page'
          title='Diagnosis'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/graphs/gra008.svg'
        />
        <AsideMenuItem
          to='himsApex/setup/treatment-page'
          title='Treatments'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/graphs/gra008.svg'
        />
        <AsideMenuItem
          to='himsApex/setup/rejection-reason-page'
          title='Reasons For Rejection'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/graphs/gra008.svg'
        />
      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub
        to='#'
        title='System Control'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/files/fil003.svg'
      >
        <AsideMenuItem
          to='himsApex/systemControl/roles-page'
          title='Roles'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/graphs/gra008.svg'
        />
        <AsideMenuItem
          to='/himsApex/systemControl/admin-page'
          title='Admin'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/graphs/gra008.svg'
        />
      </AsideMenuItemWithSub>
    </>
  )
}
