import {Button, Select} from 'antd'
import Form from 'antd/es/form'
import Input from 'antd/es/input'
import {Link} from 'react-router-dom'

const AddReceivedClaims = () => {
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
      <Link to='/himsApex/claimReception/claims-received'>
        <a style={{fontSize: '16px', fontWeight: '500'}} className='btn btn-primary btn-sm mb-7'>
          Back to Received Claims
        </a>
      </Link>
      <Form name='control-hooks' title={'Add Member'}>
        <div>
          <div className='row mb-0'>
            <div className='col-6 mb-7'>
              <label htmlFor='exampleFormControlInput1' className='required form-label'>
                Provider
              </label>
              <Form.Item name='gender'>
                <Select className={'form-select form-select-solid'}>
                  {/* <Option value='male'>MALE</Option>
                      <Option value='female'>FEMALE</Option> */}
                </Select>
              </Form.Item>
            </div>
            <div className='col-6 mb-7'>
              <label htmlFor='exampleFormControlInput1' className='required form-label'>
                Client
              </label>
              <Form.Item name='gender'>
                <Select className={'form-select form-select-solid'}>
                  {/* <Option value='male'>MALE</Option>
                      <Option value='female'>FEMALE</Option> */}
                </Select>
              </Form.Item>
            </div>
          </div>
          <div className='row mb-0'>
            <div className='col-6 mb-7'>
              <label htmlFor='exampleFormControlInput1' className='required form-label'>
                Batch Date
              </label>
              <Form.Item name='dateOfBirth' style={{width: '30%'}}>
                <Input type='date' required={true} className='form-control form-control-solid' />
              </Form.Item>
            </div>
            <div className='col-6 mb-7'>
              <label htmlFor='exampleFormControlInput1' className='required form-label'>
                Claim Month
              </label>
              <Form.Item name='dateOfBirth' style={{width: '30%'}}>
                <Input type='date' required={true} className='form-control form-control-solid' />
              </Form.Item>
            </div>
          </div>

          <div className='row mb-0'>
            <div className='col-6 mb-7'>
              <label htmlFor='exampleFormControlInput1' className='required form-label'>
                Claim Type
              </label>
              <Form.Item name='gender'>
                <Select className={'form-select form-select-solid'}>
                  {/* <Option value='male'>MALE</Option>
                      <Option value='female'>FEMALE</Option> */}
                </Select>
              </Form.Item>
            </div>
            <div className='col-6 mb-7'>
              <label htmlFor='exampleFormControlInput1' className='required form-label'>
                Resubmitted
              </label>
              <Form.Item name='gender'>
                <Select className={'form-select form-select-solid'}>
                  {/* <Option value='male'>MALE</Option>
                      <Option value='female'>FEMALE</Option> */}
                </Select>
              </Form.Item>
            </div>
          </div>
          <div className='row mb-0'>
            <div className='col-6 mb-7'>
              <label htmlFor='exampleFormControlInput1' className='required form-label'>
                Amount Received
              </label>
              <Form.Item name='phone'>
                <Input type='number' required={true} className='form-control form-control-solid' />
              </Form.Item>
            </div>
            <div className='col-6 mb-7'>
              <label htmlFor='exampleFormControlInput1' className='required form-label'>
                Remarks
              </label>
              <Form.Item name='phone'>
                <Input type='text' required={true} className='form-control form-control-solid' />
              </Form.Item>
            </div>
          </div>
          <div className='row mb-0'>
            <div className='col-6 mb-7'>
              <label htmlFor='exampleFormControlInput1' className='required form-label'>
                Book No
              </label>
              <Form.Item name='phone'>
                <Input type='number' required={true} className='form-control form-control-solid' />
              </Form.Item>
            </div>
            <div className='col-6 mb-7'>
              <label htmlFor='exampleFormControlInput1' className='required form-label'>
                Amount Paid
              </label>
              <Form.Item name='phone'>
                <Input type='number' required={true} className='form-control form-control-solid' />
              </Form.Item>
            </div>
          </div>

          <div className='row mb-0'>
            <div className='col-6 mb-7'>
              <label htmlFor='exampleFormControlInput1' className='required form-label'>
                Status
              </label>
              <Form.Item name='status'>
                <Select className={'form-select form-select-solid'}>
                  {/* <Option value='male'>MALE</Option>
                      <Option value='female'>FEMALE</Option> */}
                </Select>
              </Form.Item>
            </div>
            <div className='col-6 mb-7'>
              <label htmlFor='exampleFormControlInput1' className='required form-label'>
                Pay Date
              </label>
              <Form.Item name='dateOfBirth' style={{width: '30%'}}>
                <Input type='date' required={true} className='form-control form-control-solid' />
              </Form.Item>
            </div>
          </div>
          <div className='row mb-0'>
            <div className='col-6 mb-7'>
              <label htmlFor='exampleFormControlInput1' className='required form-label'>
                Account Date
              </label>
              <Form.Item name='status'>
                <Select className={'form-select form-select-solid'}>
                  {/* <Option value='male'>MALE</Option>
                      <Option value='female'>FEMALE</Option> */}
                </Select>
              </Form.Item>
            </div>
            <div className='col-6 mb-7'>
              <label htmlFor='exampleFormControlInput1' className='required form-label'>
                Completion Date
              </label>
              <Form.Item name='dateOfBirth' style={{width: '30%'}}>
                <Input type='date' required={true} className='form-control form-control-solid' />
              </Form.Item>
            </div>
          </div>
          <div className='row mb-0'>
            <div className='col-6 mb-7'>
              <label htmlFor='exampleFormControlInput1' className='required form-label'>
                Assigned To
              </label>
              <Form.Item name='dateOfBirth'>
                <Input type='text' required={true} className='form-control form-control-solid' />
              </Form.Item>
            </div>
          </div>
        </div>

        <Button type='primary' key='submit' htmlType='submit'>
          Save
        </Button>
      </Form>
    </div>
  )
}
export {AddReceivedClaims}
