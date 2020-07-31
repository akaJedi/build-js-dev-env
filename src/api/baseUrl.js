export default function getBaseUrl() {
  const inDevelopment = window.location.hostname === 'localhost';
  console.log(inDevelopment);/* eslint-disable no-console */
  return inDevelopment ? 'http://localhost:3001/' : '/';
}