'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Search, X } from 'lucide-react';
import { Select, ListBox } from '@heroui/react';

const categories = ['AI', 'Tech', 'Health', 'Education', 'Programming', 'Finance'];

const SearchFilterBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (category) params.set('category', category);

    router.replace(`${pathname}?${params.toString()}`);
  }, [search, category, pathname, router]);

  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm flex flex-col sm:flex-row gap-3 items-center">

      <div className="relative w-full sm:flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
          className="w-full h-[42px] pl-9 pr-9 bg-gray-100/80 dark:bg-zinc-800/80 hover:bg-gray-200/50 dark:hover:bg-zinc-700/50 text-gray-700 dark:text-gray-200 placeholder-gray-400 rounded-xl border border-transparent outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-sm"
        />
        {search && (
          <button
            onClick={() => setSearch('')} 
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <Select
        className="w-full sm:w-[200px]"
        placeholder="All Categories"
        selectedKey={category || null}
        onSelectionChange={(key) => setCategory(key ? String(key) : '')}
      >
        <Select.Trigger className="w-full flex items-center justify-between bg-gray-100/80 dark:bg-zinc-800/80 hover:bg-gray-200/50 dark:hover:bg-zinc-700/50 text-gray-700 dark:text-gray-300 px-4 py-2.5 rounded-xl border border-transparent transition-all cursor-pointer text-sm outline-none data-[focused]:ring-2 data-[focused]:ring-blue-500 h-[42px]">
          <Select.Value />
          <Select.Indicator className="text-gray-400 dark:text-gray-500" />
        </Select.Trigger>
        <Select.Popover className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-xl shadow-lg p-1 min-w-[200px] outline-none entering:animate-in entering:fade-in-0 entering:zoom-in-95 leaving:animate-out leaving:fade-out-0 leaving:zoom-out-95">
          <ListBox className="outline-none flex flex-col gap-0.5">
            <ListBox.Item
              id=""
              textValue="All Categories"
              className="px-3 py-2 text-sm text-gray-500 dark:text-gray-400 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-800 outline-none data-[focused]:bg-gray-100 dark:data-[focused]:bg-zinc-800"
            >
              All Categories
            </ListBox.Item>
            {categories.map((cat) => (
              <ListBox.Item
                key={cat}
                id={cat}
                textValue={cat}
                className="px-3 py-2 text-sm text-gray-700 dark:text-gray-200 rounded-lg cursor-pointer flex items-center justify-between hover:bg-gray-100 dark:hover:bg-zinc-800 outline-none data-[focused]:bg-gray-100 dark:data-[focused]:bg-zinc-800 data-[selected]:font-medium data-[selected]:text-blue-600 dark:data-[selected]:text-blue-400"
              >
                {cat}
                <ListBox.ItemIndicator className="text-blue-600 dark:text-blue-400 ml-2" />
              </ListBox.Item>
            ))}
          </ListBox>
        </Select.Popover>
      </Select>
    </div>
  );
};

export default SearchFilterBar;