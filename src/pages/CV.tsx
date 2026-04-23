export default function CV() {
  return (
    // vertical top-level container
    <div className="flex flex-col gap-2">
      <h1 className="font-bold">CV</h1>
      <hr/>
      {/* horizontal per-section: label, info */}
      <div className="flex w-fill h-fit pb-15">
        <div className="flex flex-col w-1/2">
          <h2>Label</h2>
        </div>
        <div className="flex flex-col w-1/2 gray">
          <p>line 1</p>
          <p>line 2</p>
          <p>line 3</p>
        </div>
      </div>
      <hr/>
      <div className="flex w-fill h-fit pb-15">
        <div className="flex flex-col w-1/2">
          <h2>Education</h2>
        </div>
        <div className="flex flex-col w-1/2">
          <p>line 1</p>
          <p>line 2</p>
          <p>line 3</p>
        </div>
      </div>
      
    </div>
  )
}
