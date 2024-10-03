import sendUserOperation from '../utils/sendUserOperation'
export default function Button() {
  return (
    <div className="card">
      <button onClick={() => sendUserOperation()
      }>click to send</button>
    </div>
  );
}
