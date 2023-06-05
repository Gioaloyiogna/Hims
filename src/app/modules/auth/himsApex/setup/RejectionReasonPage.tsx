import {sampleComponent} from '../claimReception/LoadClaimsPage'
import {Button, DatePicker, Input, Modal, Space, Table, TimePicker} from 'antd'
import {useState} from 'react'
import {useForm} from 'react-hook-form'
import {KTSVG} from '../../../../../_metronic/helpers'
const RejectionReasonPage = () => {
  const {register, reset, handleSubmit} = useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const columns: any = [
    {
      title: 'Name',
      dataIndex: '',
      key: 'key',
    },
    {
      title: 'Description',
      dataIndex: '',
      defaultSortOrder: 'descend',
    },
    {
      title: 'Action',
      fixed: 'right',
      width: 150,
      render: (_: any, record: any) => (
        <Space size='middle'>
          <a className='btn btn-light-warning btn-sm'>Details</a>
          <a className='btn btn-light-danger btn-sm'>Delete</a>
        </Space>
      ),
    },
  ]
  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
      }}
    >
      <div className='d-flex justify-content-between'>
        <Space style={{marginBottom: 16}}>
          <Input placeholder='Enter Search Text' type='text' allowClear />
          <Button type='primary'>Search</Button>
        </Space>
        <Space style={{marginBottom: 16}}>
          <button type='button' className='btn btn-primary me-3' onClick={showModal}>
            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
            Add
          </button>
          <button type='button' className='btn btn-light-primary me-3'>
            <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
            Upload
          </button>
          <button type='button' className='btn btn-light-primary me-3'>
            <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
            Export
          </button>
        </Space>
      </div>
      <Table columns={columns} bordered />

      {/*Add Fault*/}
      <Modal
        title='Membership'
        open={isModalOpen}
        onCancel={handleCancel}
        closable={true}
        footer={[
          <Button key='back' onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key='submit' type='primary' htmlType='submit'>
            Submit
          </Button>,
        ]}
      >
        <form onSubmit={handleSubmit((data: any) => console.log(data))}>
          <div style={{padding: '20px 20px 0 20px'}} className='row mb-0 '>
            <div className='col-6'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Code
              </label>
              <input
                type='text'
                {...register('policyNo')}
                name='policyNo'
                className='form-control form-control-white'
              />
            </div>
            <div className='col-6'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Full Name
              </label>
              <input
                type='text'
                {...register('fullName')}
                name='fullName'
                className='form-control form-control-white'
              />
            </div>
          </div>
          <div style={{padding: '20px 20px 0 20px'}} className='row mb-0 '>
            <div className='col-6'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Client
              </label>
              <input
                type='text'
                {...register('client')}
                name='client'
                className='form-control form-control-white'
              />
            </div>
            <div className='col-6'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Type
              </label>
              <input
                type='text'
                {...register('type')}
                name='type'
                className='form-control form-control-white'
              />
            </div>
          </div>
          <div style={{padding: '20px 20px 0 20px'}} className='row mb-0 '>
            <div className='col-6'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                DOB
              </label>
              <input
                type='date'
                {...register('dob')}
                name='dob'
                className='form-control form-control-white'
              />
            </div>
            <div className='col-6'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Phone Number
              </label>
              <input
                type='phone'
                {...register('phoneNumber')}
                name='phoneNumber'
                className='form-control form-control-white'
              />
            </div>
          </div>
          <div style={{padding: '20px 20px 0 20px'}} className='row mb-0 '>
            <div className='col-6'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Status
              </label>
              <input
                type='text'
                {...register('status')}
                name='status'
                className='form-control form-control-white'
              />
            </div>
          </div>
        </form>
      </Modal>
    </div>
  )
}
export {RejectionReasonPage}
