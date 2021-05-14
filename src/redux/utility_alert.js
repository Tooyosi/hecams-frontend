import Swal from 'sweetalert2';

// sweetalert notification
export const showLoading = (params) => {
  Swal.fire({
    text: 'Please wait...',
    onBeforeOpen: () => Swal.showLoading(),
    allowOutsideClick: () => !Swal.isLoading(),
    ...params
  });
};

export const swalClose = () => Swal.close()

export const showError = (errStr, params) => {
  Swal.fire({
    type: 'error',
    text: `Error: ${errStr}`,
    allowOutsideClick: () => !Swal.isLoading(),
    ...params
  });
};

export const showSuccess = (success, params) => {
  Swal.fire({
    type: 'success',
    text: `${success}`,
    allowOutsideClick: () => !Swal.isLoading(),
    ...params
  });
};

export const confirmBox = () => {
  return Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  })
};