import {Button, Form, Input, Select, Space, Table} from 'antd'
import {KTCard} from '../../../../_metronic/helpers/components/KTCard'
import {KTCardBody} from '../../../../_metronic/helpers/components/KTCardBody'
import {PageTitle} from '../../../../_metronic/layout/core/PageData'
import {sampleComponent} from './claimReception/LoadClaimsPage'
import {Link} from 'react-router-dom'
import {KTSVG} from '../../../../_metronic/helpers/components/KTSVG'

const ClaimEntriesPage = () => {
  return (
    <>
      <PageTitle>Claim Entries</PageTitle>
      <KTCard>
        <KTCardBody>
          <div className='d-flex justify-content-between'>
            <Form name='control-hooks' title={'Add Member'}>
              <div>
                <div className='row mb-0'>
                  <div className='col-2 mb-7'>
                    <label htmlFor='exampleFormControlInput1' className='required form-label'>
                      Batch Id
                    </label>
                    <Form.Item name='lname'>
                      <Input
                        type='text'
                        required={true}
                        className='form-control form-control-solid'
                      />
                    </Form.Item>
                  </div>
                  <div className='col-2 mb-7'>
                    <label htmlFor='exampleFormControlInput1' className='required form-label'>
                      Batch Date
                    </label>
                    <Form.Item name='duration'>
                      <Input
                        type='date'
                        required={true}
                        className='form-control form-control-solid'
                      />
                    </Form.Item>
                  </div>
                  <div className='col-3 mb-7'>
                    <label htmlFor='exampleFormControlInput1' className='required form-label'>
                      Provider
                    </label>
                    <Form.Item name='duration'>
                      <Input
                        type='text'
                        required={true}
                        className='form-control form-control-solid'
                      />
                    </Form.Item>
                  </div>
                  <div className='col-2 mb-7'>
                    <label htmlFor='exampleFormControlInput1' className='required form-label'>
                      Total Received
                    </label>
                    <Form.Item name='duration'>
                      <Input
                        type='number'
                        required={true}
                        className='form-control form-control-solid'
                      />
                    </Form.Item>
                  </div>
                  <div className='col-3 mb-7'>
                    <label htmlFor='exampleFormControlInput1' className='required form-label'>
                      Claims Number
                    </label>
                    <Form.Item name='duration'>
                      <Input
                        type='number'
                        required={true}
                        className='form-control form-control-solid'
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className='row mb-0'>
                  <div className='col-2 mb-7'>
                    <label htmlFor='exampleFormControlInput1' className='required form-label'>
                      Total Claimed
                    </label>
                    <Form.Item name='lname'>
                      <Input
                        type='number'
                        required={true}
                        className='form-control form-control-solid'
                      />
                    </Form.Item>
                  </div>
                  <div className='col-2 mb-7'>
                    <label htmlFor='exampleFormControlInput1' className='required form-label'>
                      Total Rej./Susp.
                    </label>
                    <Form.Item name='lname'>
                      <Input
                        type='number'
                        required={true}
                        className='form-control form-control-solid'
                      />
                    </Form.Item>
                  </div>
                  <div className='col-3 mb-7'>
                    <label htmlFor='exampleFormControlInput1' className='required form-label'>
                      Total To Be Paid
                    </label>
                    <Form.Item name='duration'>
                      <Input
                        type='number'
                        required={true}
                        className='form-control form-control-solid'
                      />
                    </Form.Item>
                  </div>
                  <div className='col-2 mb-7'>
                    <label htmlFor='exampleFormControlInput1' className='required form-label'>
                      Status
                    </label>
                    <Form.Item name='duration'>
                      <Input
                        type='text'
                        required={true}
                        className='form-control form-control-solid'
                      />
                    </Form.Item>
                  </div>
                  <div className='col-3 mb-7 d-flex align-items-center '>
                    <Space>
                      <Button
                        type='primary'
                        htmlType='submit'
                        className='menu-title btn-success mb-2'
                      >
                        Refresh
                      </Button>

                      <Button className='btn btn-light-danger btn-sm mb-2' >
                       Post
                      </Button>
                    </Space>
                  </div>
                </div>
              </div>
            </Form>
          </div>
          <Table className='table-responsive' rowKey={'id'} bordered />
        </KTCardBody>
      </KTCard>
    </>
  )
}
export {ClaimEntriesPage}
