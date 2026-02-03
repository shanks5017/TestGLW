
import { Search, Filter, Plus, MoreHorizontal } from 'lucide-react';
import { Badge } from './Badge';

export function JobTrackerMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden max-w-4xl">
      {/* Header */}
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-900">My job search</h3>
          <button className="bg-[#0352a8] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 hover:bg-[#2A74C9] transition-colors">
            <Plus className="w-4 h-4" />
            <span>Add More</span>
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center space-x-4 mt-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4 text-gray-600" />
            <span className="text-gray-700">Filter</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 py-4 bg-white border-b border-gray-100">
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">10</div>
            <div className="text-sm text-gray-600">Wishlist</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">05</div>
            <div className="text-sm text-gray-600">Applied</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">02</div>
            <div className="text-sm text-gray-600">Interview</div>
          </div>
        </div>
      </div>

      {/* Job Cards */}
      <div className="p-6 space-y-4">
        {/* IBM Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <div className="w-12 h-12 bg-[#0352a8] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">IBM</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Software Engineer</h4>
                <p className="text-gray-600 text-sm">IBM • Remote</p>
                <div className="flex items-center space-x-2 mt-2">
                  <Badge variant="primary" size="sm">Full-time</Badge>
                  <Badge variant="neutral" size="sm">Remote</Badge>
                </div>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Meta Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <div className="w-12 h-12 bg-[#0463c7] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Meta</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Frontend Developer</h4>
                <p className="text-gray-600 text-sm">Meta • San Francisco, CA</p>
                <div className="flex items-center space-x-2 mt-2">
                  <Badge variant="secondary" size="sm">Full-time</Badge>
                  <Badge variant="success" size="sm">On-site</Badge>
                </div>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Microsoft Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MS</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Product Manager</h4>
                <p className="text-gray-600 text-sm">Microsoft • Seattle, WA</p>
                <div className="flex items-center space-x-2 mt-2">
                  <Badge variant="primary" size="sm">Full-time</Badge>
                  <Badge variant="warning" size="sm">Hybrid</Badge>
                </div>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Google Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">UX Designer</h4>
                <p className="text-gray-600 text-sm">Google • Mountain View, CA</p>
                <div className="flex items-center space-x-2 mt-2">
                  <Badge variant="secondary" size="sm">Contract</Badge>
                  <Badge variant="success" size="sm">On-site</Badge>
                </div>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Right side pipeline preview */}
      <div className="absolute top-20 right-6 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-64 z-10">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Pipeline</span>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-[#D6EAFF] rounded flex items-center justify-center">
                <span className="text-[#0463c7] text-xs font-medium">5</span>
              </div>
              <span className="text-sm text-gray-600">Wishlist</span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-yellow-100 rounded flex items-center justify-center">
                <span className="text-yellow-600 text-xs font-medium">3</span>
              </div>
              <span className="text-sm text-gray-600">Applied</span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                <span className="text-green-600 text-xs font-medium">2</span>
              </div>
              <span className="text-sm text-gray-600">Interview</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
