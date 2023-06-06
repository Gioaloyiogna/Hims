import {sampleComponent} from '../../claimReception/LoadClaimsPage'
import {Button, Form, Input, Select} from 'antd'
import {Link} from 'react-router-dom'
import {PageTitle} from '../../../../../../_metronic/layout/core'
const DentalOptical = () => {
  return (
    <div
      className='col-12'
      style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '5px',
        boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
      }}
    >
      <PageTitle>Add Complaint</PageTitle>

      <Form name='control-hooks' title={'Add Member'}>
        <div>
          <div className='row mb-0'>
            <div className='col-6 mb-7'>
              <label htmlFor='exampleFormControlInput1' className='required  form-label'>
                Client
              </label>

              <Form.Item name='gender' required={true}>
                <Select className={'form-select form-select-solid'}></Select>
              </Form.Item>
            </div>
            <div className='col-6 mb-7'>
              <label htmlFor='exampleFormControlInput1' className='required form-label'>
               Duration
              </label>
              <Form.Item name='duration'>
                <Input type='number' required={true} className='form-control form-control-solid' />
              </Form.Item>
            </div>
          </div>

          <div className='row mb-0'>
            <div className='col-6 mb-7'>
              <label htmlFor='exampleFormControlInput1' className='required form-label'>
                Description
              </label>
              <Form.Item name='lname'>
                <Input type='text' required={true} className='form-control form-control-solid' />
              </Form.Item>
            </div>
            <div className='col-6 mb-7'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Follow-Up
              </label>

              <Form.Item name='followUp'>
                <Select className={'form-select form-select-solid'}></Select>
              </Form.Item>
            </div>
          </div>
          <div className='row mb-0'>
            <div className='col-6 mb-7'>
              <label htmlFor='exampleFormControlInput1' className='required form-label'>
                Procedure Type
              </label>
              <Form.Item name='email'>
                <Input type='email' required={true} className='form-control form-control-solid' />
              </Form.Item>
            </div>

            <div className='col-6 mb-7'>
              <label htmlFor='exampleFormControlInput1' className='required form-label'>
                Member
              </label>
              <Form.Item name='gender' required={true}>
                <Select className={'form-select form-select-solid'}></Select>
              </Form.Item>
            </div>
          </div>
          <div className='row mb-0'>
            <div className='col-6 mb-7'>
              <label htmlFor='exampleFormControlInput1' className='required form-label'>
                Provider
              </label>
              <Form.Item name='provider' required={true}>
                <Select className={'form-select form-select-solid'}></Select>
              </Form.Item>
            </div>
            <div className='col-6 mb-7'>
              <label htmlFor='exampleFormControlInput1' className='required form-label'>
                Approved Amount
              </label>
              <Form.Item name='approvedAmount'>
                <Input type='number' required={true} className='form-control form-control-solid' />
              </Form.Item>
            </div>
          </div>
          <div className='row mb-0'>
            <div className='col-6 mb-7'>
              <label htmlFor='exampleFormControlInput1' className='required form-label'>
                Complaint Date
              </label>
              <Form.Item name='dateOfBirth' style={{width: '30%'}}>
                <Input type='date' required={true} className='form-control form-control-solid' />
              </Form.Item>
            </div>
            <div className='col-6 mb-7'>
              <label htmlFor='exampleFormControlInput1' className='required form-label'>
                Logged By
              </label>
              <Form.Item name='loggedBy'>
                <Input type='email' required={true} className='form-control form-control-solid' />
              </Form.Item>
            </div>
          </div>
        </div>
        <Button type='primary' key='submit' htmlType='submit'>
          Submit
        </Button>
      </Form>
    </div>
  )
}
export {DentalOptical}
