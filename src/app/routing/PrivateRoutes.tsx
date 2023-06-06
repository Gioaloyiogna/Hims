import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import HimsApexPage from '../modules/auth/himsApex/HimsApexPage'

import {PageTitle} from '../../_metronic/layout/core'
import { AddReceivedClaims } from '../modules/auth/himsApex/claimReception/AddReceivedClaims'


const PrivateRoutes = () => {
  // const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))

  // const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  // const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='himsApex/*' element={<HimsApexPage />} />

        {/*<Route path='builder' element={<BuilderPageWrapper />} />*/}
        {/*<Route path='menu-test' element={<MenuTestPage />} />*/}
        {/* Lazy Modules */}
        {/*<Route*/}
        {/*  path='crafted/pages/profile/*'*/}
        {/*  element={*/}
        {/*    <SuspensedView>*/}
        {/*      <ProfilePage />*/}
        {/*    </SuspensedView>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path='crafted/pages/wizards/*'*/}
        {/*  element={*/}
        {/*    <SuspensedView>*/}
        {/*      <WizardsPage />*/}
        {/*    </SuspensedView>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path='crafted/widgets/*'*/}
        {/*  element={*/}
        {/*    <SuspensedView>*/}
        {/*      <WidgetsPage />*/}
        {/*    </SuspensedView>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path='crafted/account/*'*/}
        {/*  element={*/}
        {/*    <SuspensedView>*/}
        {/*      <AccountPage />*/}
        {/*    </SuspensedView>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path='apps/chat/*'*/}
        {/*  element={*/}
        {/*    <SuspensedView>*/}
        {/*      <ChatPage />*/}
        {/*    </SuspensedView>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path='apps/user-management/*'*/}
        {/*  element={*/}
        {/*    <SuspensedView>*/}
        {/*      <UsersPage />*/}
        {/*    </SuspensedView>*/}
        {/*  }*/}
        {/*/>*/}
        {/* Page Not Found */}

        {/* <Route path='himsApex/claimReception/add-received-calims' element={<AddReceivedClaims/>}/> */}
        {/* <Route
        path='/register/*'
        element={
          <>
            
            <addReceivedCalims />
          </>
        }
      /> */}
         <Route path='/himsApex/claimReception/add-claims-received' element={<AddReceivedClaims/>}/>
       
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--kt-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
