function DashboardSettings() {
  return <div className="w-full flex flex-col gap-8 px-6 md:px-12 lg:px-24 text-text-primary">
    <div>
      <h2 className="text-2xl font-bold tracking-wider">Settings</h2>
    </div>

    <div className="flex flex-col gap-3 mt-6">
      <h3 className="text-xl font-medium">App status</h3>

      <div className="text-text-secondary">
      <label class="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer" />

  <span class="text-sm font-medium   mr-3">Deactivate</span>
  <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-accent-1   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-accent-1"></div>
  <span class="ms-3 text-sm font-medium text-text-primary">Activate</span>
</label>

      </div>
    </div>


    <form className="flex flex-col gap-2">
      <h3 className="text-xl font-medium">App details</h3>
      <div className="text-sm flex flex-col gap-1">
        <label htmlFor="name" className="text-xs">App name:</label>
        <input type="text" placeholder="App name" className="w-full md:w-1/2 p-3 rounded-lg border-[1px] focus:outline-none focus:border-accent-2"/>
      </div>
      <div className="text-sm flex flex-col gap-1">
        <label htmlFor="name" className="text-xs">Domain:</label>
        <input type="text" placeholder="App domain" className="w-full md:w-1/2 p-3 rounded-lg border-[1px] focus:outline-none focus:border-accent-2"/>
      </div>

      <div className="flex w-full md:w-1/2 gap-2">
        <button className="w-full p-2 text-xs border-[1px] rounded-lg text-text-primary hover:bg-gray-50 transition-all">Cancel</button>
        <button className="w-full p-2 text-xs bg-accent-1 rounded-lg font-semibold text-white hover:bg-opacity-80">Update</button>
      </div>
    </form>
  </div>;
}

export default DashboardSettings;
