import {Button, Input, Space, Table} from 'antd'
import {KTCard} from '../../../../../../_metronic/helpers/components/KTCard'
import {KTCardBody} from '../../../../../../_metronic/helpers/components/KTCardBody'
import {PageTitle} from '../../../../../../_metronic/layout/core'
import {sampleComponent} from '../../claimReception/LoadClaimsPage'
import {KTSVG} from '../../../../../../_metronic/helpers/components/KTSVG'
import {Link} from 'react-router-dom'

const EntriesPage = () => {
  const columns: any = [
    {
      title: 'Category',
      sorter: (a: any, b: any) => a.id - b.id,
    },
    {
      title: 'Client',
      sorter: (a: any, b: any) => a.id - b.id,
    },

    {
      title: 'Member',
      sorter: (a: any, b: any) => a.id - b.id,
    },
    {
      title: 'Complaint Date',
      sorter: (a: any, b: any) => a.id - b.id,
    },
    {
      title: 'Complaint Description',
      sorter: (a: any, b: any) => a.id - b.id,
    },
    {
      title: 'Action',
      render: (record: any) => {
        return (
          <>
            <Space size='middle'>
              <a href='#' className='btn btn-light-warning btn-sm'>
                Resolve
              </a>
            </Space>
          </>
        )
      },
    },
  ]

  return (
    <>
      <PageTitle>Entries</PageTitle>
      <KTCard>
        <KTCardBody>
          <div className='d-flex justify-content-between'>
            <Space style={{marginBottom: 16}}>
              <Input placeholder='Enter Search Text' type='text' allowClear />
              <Button type='primary'>Search</Button>
            </Space>
          </div>
          <Table className='table-responsive' rowKey={'id'} columns={columns} bordered />
        </KTCardBody>
      </KTCard>
    </>
  )
}
export {EntriesPage}
