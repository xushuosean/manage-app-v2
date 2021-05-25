import service from "../config.service"

export function Login(data: any) {
  return service({
    method: 'post',
    url: '/ddimanage/ddi/loginmanage/login',
    data,
  })
}