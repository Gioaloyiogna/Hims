import {Button, Input, Space, Table} from 'antd'
import {KTCard} from '../../../../../../_metronic/helpers/components/KTCard'
import {KTCardBody} from '../../../../../../_metronic/helpers/components/KTCardBody'
import {PageTitle} from '../../../../../../_metronic/layout/core'
import {sampleComponent} from '../../claimReception/LoadClaimsPage'
import {KTSVG} from '../../../../../../_metronic/helpers/components/KTSVG'
import {Link} from 'react-router-dom'

const EntriesPage = () => {
  return (
    <>
      <PageTitle>Members</PageTitle>
      <KTCard>
        <KTCardBody>
          <div className='d-flex justify-content-between'>
            <Space style={{marginBottom: 16}}>
              <Input placeholder='Enter Search Text' type='text' allowClear />
              <Button type='primary'>Search</Button>
            </Space>
            <Space style={{marginBottom: 16}}>
              <Link to='add'>
                <button type='button' className='btn btn-primary me-3'>
                  <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                  Add
                </button>
              </Link>
            </Space>
          </div>
          <Table
            className='table-responsive'
            rowKey={'id'}
            // columns={columns}
            bordered
          />
        </KTCardBody>
      </KTCard>
    </>
  )
}
export {EntriesPage}
