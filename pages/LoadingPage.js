
const LoadingPage = (props) => (
  <>
    <div style={{textAlign: 'center'}}>
      <p> Testing Loading Page </p>
      <button onClick={props.closeLoading}> Close Loading </button>
    </div>
  </>
)

export default LoadingPage;
