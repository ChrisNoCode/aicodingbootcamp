import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Session, WeekSchedule } from '../types';

function SessionItem({ session }: { session: Session }) {
  return (
    <div className="flex items-start space-x-6 p-5 rounded-lg hover:bg-gray-800/50 transition-colors">
      <div className="flex-shrink-0 w-24 text-center">
        {session.date && (
          <>
            <div className="text-emerald-400 text-sm font-medium uppercase mb-1">
              {session.day.slice(0, 3)}
            </div>
            <div className="text-2xl font-bold text-white">{session.date}</div>
          </>
        )}
      </div>
      <div className="flex-grow pt-1">
        <div className="flex items-center space-x-2">
          <span className="text-white font-medium">
            {session.content}
          </span>
          {session.isLive && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-900 text-emerald-200">
              LIVE
            </span>
          )}
        </div>
        <div className="text-sm text-gray-400 mt-1">{session.time}</div>
      </div>
    </div>
  );
}

export function WeekScheduleCollapsible({ schedule }: { schedule: WeekSchedule }) {
  const [isOpen, setIsOpen] = useState(schedule.week === "Week 1");

  return (
    <div className="border border-gray-700 rounded-xl overflow-hidden bg-gray-800 shadow-sm hover:shadow-md transition-shadow w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-700/50 transition-colors"
      >
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-2xl font-bold text-white">{schedule.week}</h3>
            <span className="text-sm text-blue-400">{schedule.dateRange}</span>
          </div>
          <h4 className="text-lg font-semibold bg-gradient-to-r from-[#9D4EDD] via-[#FF69B4] to-[#FF7F50] text-transparent bg-clip-text mb-2 text-left">{schedule.title}</h4>
          <p className="text-gray-400 text-sm text-left">
            {schedule.description}
          </p>
        </div>
        <div className="ml-4">
          <div className="w-8 h-8 rounded-full bg-[#9D4EDD]/10 flex items-center justify-center">
            <ChevronDown 
              className={`w-5 h-5 text-[#9D4EDD] transition-transform ${isOpen ? 'rotate-180' : ''}`}
            />
          </div>
        </div>
      </button>
      {isOpen && (
        <div className="border-t border-gray-700 divide-y divide-gray-700 w-full">
          {schedule.sessions.map((session, index) => (
            <SessionItem key={index} session={session} />
          ))}
        </div>
      )}
    </div>
  );
}