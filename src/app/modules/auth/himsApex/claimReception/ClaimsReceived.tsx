import {Button, Space, Table} from 'antd'
import {sampleComponent} from './LoadClaimsPage'
import {PageTitle} from '../../../../../_metronic/layout/core'
import {KTCard} from '../../../../../_metronic/helpers/components/KTCard'
import {KTCardBody} from '../../../../../_metronic/helpers/components/KTCardBody'
import Input from 'antd/es/input/Input'
import {Link} from 'react-router-dom'
import {KTSVG} from '../../../../../_metronic/helpers/components/KTSVG'

const ClaimsreceivedPage = () => {
  const columns: any = [
    {
      title: 'Batch Id',
      sorter: (a: any, b: any) => a.id - b.id,
    },
    {
      title: 'Provider',
      sorter: (a: any, b: any) => a.id - b.id,
    },

    {
      title: 'Claim Month',
      sorter: (a: any, b: any) => a.id - b.id,
    },
    {
      title: 'Batch Date',
      sorter: (a: any, b: any) => a.id - b.id,
    },
    {
      title: 'Amount Received',
      sorter: (a: any, b: any) => a.id - b.id,
    },
    {
      title: 'Status',
      sorter: (a: any, b: any) => a.id - b.id,
    },
    {
      title: 'Amount Paid',
      sorter: (a: any, b: any) => a.id - b.id,
    },
    {
      title: ' Claims Number',
      sorter: (a: any, b: any) => a.id - b.id,
    },
    {
      title: 'Vetted Claims Number ',
      sorter: (a: any, b: any) => a.id - b.id,
    },
    {
      title: 'Action',
      render: (record: any) => {
        return (
          <>
            <Space size='middle'>
              <a href='#' className='btn btn-light-warning btn-sm'>
                Details
              </a>
            </Space>
          </>
        )
      },
    },
  ]

  return (
    <>
      <PageTitle>Received Claims</PageTitle>
      <KTCard>
        <KTCardBody>
          <div className='d-flex justify-content-between'>
            <Space style={{marginBottom: 16}}>
              <Input placeholder='Enter Search Text' type='text' allowClear />
              <Button type='primary'>Search</Button>
            </Space>
            <Space style={{marginBottom: 16}}>
              <Link to='/himsApex/claimReception/add-claims-received'>
                <button type='button' className='btn btn-primary me-3'>
                  <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                  Add
                </button>
              </Link>
            </Space>
          </div>
          <Table className='table-responsive' rowKey={'id'} columns={columns} bordered />
        </KTCardBody>
      </KTCard>
    </>
  )
}
export {ClaimsreceivedPage}
