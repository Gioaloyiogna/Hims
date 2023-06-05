import {Button, DatePicker, Input, Modal, Space, Table, TimePicker} from 'antd'
import {KTSVG} from '../../../../_metronic/helpers'
import {useState} from 'react'
import {useForm} from 'react-hook-form'

const MembershipPage = () => {
  const {register, reset, handleSubmit} = useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const columns: any = [
    {
      title: 'Policy No',
      dataIndex: '',
      key: 'key',
    },
    {
      title: 'FullName',
      dataIndex: '',
    },
    {
      title: 'Client',
      dataIndex: '',
      defaultSortOrder: 'descend',
    },
    {
      title: 'Type',
      dataIndex: '',
    },
    {
      title: 'DOB',
      dataIndex: '',
    },
    {
      title: 'Phone Number',
      dataIndex: '',
    },
    {
      title: 'Status',
      dataIndex: '',
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
        width={800}
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
            <div className='col-4'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Surname
              </label>
              <input
                type='text'
                {...register('surname')}
                name='surname'
                className='form-control form-control-white'
              />
            </div>
            <div className='col-4'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Firstname
              </label>
              <input
                type='text'
                {...register('firstname')}
                name='firstname'
                className='form-control form-control-white'
              />
            </div>
            <div className='col-4'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Middlename
              </label>
              <input
                type='text'
                {...register('middlename')}
                name='middlename'
                className='form-control form-control-white'
              />
            </div>
          </div>
          <div style={{padding: '20px 20px 0 20px'}} className='row mb-0 '>
            <div className='col-4'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Client
              </label>
              <select
                {...register('client')}
                className='form-select form-select-white'
                aria-label='Select example'
              >
                <option>value 1</option>
                <option>value 2</option>
                <option>value 3</option>
                <option>value 4</option>
              </select>
            </div>

            <div className='col-4'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Title
              </label>
              <select
                {...register('title')}
                className='form-select form-select-white'
                aria-label='Select example'
              >
                <option>Mr</option>
                <option>Mrs</option>
                <option>Miss</option>
                <option>Dr</option>
                <option>Pr</option>
              </select>
            </div>

            <div className='col-4'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Join Date
              </label>
              <input
                type='text'
                {...register('joindate')}
                name='joindate'
                className='form-control form-control-white'
              />
            </div>
          </div>
          <div style={{padding: '20px 20px 0 20px'}} className='row mb-0 '>
            <div className='col-4'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                DOB
              </label>
              <input
                type='text'
                {...register('dob')}
                name='dob'
                className='form-control form-control-white'
              />
            </div>
            <div className='col-4'>
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
            <div className='col-4'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Nationality
              </label>
              <select
                {...register('nationality')}
                className='form-select form-select-white'
                aria-label='Select example'
              >
                <option>GHANAIAN</option>
                <option>NIGERIAN</option>
                <option>AMERICAN</option>
                <option>LEBANESE</option>
                <option>CHINESE</option>
                <option>GUINEA BISSAU</option>
                <option>TURKISH</option>
              </select>
            </div>
          </div>
          <div style={{padding: '20px 20px 0 20px'}} className='row mb-0 '>
            <div
              className='col
            '
            >
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Marital Status
              </label>
              <select
                {...register('MaritalStatus')}
                className='form-select form-select-white'
                aria-label='Select example'
              >
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
                <option>Widow</option>
              </select>
            </div>
            <div
              className='col
            '
            >
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Chronic Diseases
              </label>
              <input
                type='text'
                {...register('chronicDiseases')}
                name='chronicDiseases'
                className='form-control form-control-white'
              />
            </div>
            <div
              className='col
            '
            >
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Product
              </label>
              <select
                {...register('product')}
                className='form-select form-select-white'
                aria-label='Select example'
              >
                <option>POLICY NULL</option>
                <option>APEX BRONZE</option>
                <option>APEX SILVER</option>
                <option>APEX GOLD</option>
                <option>APEX PLATINUM</option>
              </select>
            </div>
          </div>

          <div style={{padding: '20px 20px 0 20px'}} className='row mb-0 '>
            <div className='col-4'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Age Status
              </label>
              <select
                {...register('ageStatus')}
                className='form-select form-select-white'
                aria-label='Select example'
              >
                <option>Adult</option>
                <option>Child</option>
              </select>
            </div>
            <div className='col-4'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Status
              </label>
              <select
                {...register('status')}
                className='form-select form-select-white'
                aria-label='Select example'
              >
                <option>Active</option>
                <option>Inactive</option>
                <option>expired</option>
              </select>
            </div>
            <div className='col-4'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Gender
              </label>
              <select
                {...register('gender')}
                className='form-select form-select-white'
                aria-label='Select example'
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
          <div style={{padding: '20px 20px 0 20px'}} className='row mb-0 '>
            <div className='col-4'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Staff ID
              </label>
              <input
                type='id'
                {...register('staffID')}
                name='staffID'
                className='form-control form-control-white'
              />
            </div>
            <div className='col-4'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Personal Email
              </label>
              <input
                type='text'
                {...register('personalEmail')}
                name='personalEmail'
                className='form-control form-control-white'
              />
            </div>

            <div className='col-4'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Business Email
              </label>
              <input
                type='text'
                {...register('businessEmail')}
                name='businessEmail'
                className='form-control form-control-white'
              />
            </div>
          </div>
          <div style={{padding: '20px 20px 0 20px'}} className='row mb-0 '>
            <div className='col-6'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Address
              </label>
              <input
                type='text'
                {...register('address')}
                name='address'
                className='form-control form-control-white'
              />
            </div>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export {MembershipPage}
