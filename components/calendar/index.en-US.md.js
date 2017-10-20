webpackJsonp([199,220],{891:function(e,t){e.exports={content:["section",["p","Container for displaying data in calendar form."],["h2","When To Use"],["p","When data is in the form of dates, such as schedules, timetables, prices calendar, lunar calendar. This component also supports Year/Month switch."]],meta:{category:"Components",type:"Data Display",cols:1,title:"Calendar",filename:"components/calendar/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p",["strong","Note:"]," Part of the Calendar's locale is read from ",["code","value"],". So, please set the locale of ",["code","moment"]," correctly."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">\'moment\'</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// It\'s recommended to set locale in entry file globaly.</span>\n<span class="token keyword">import</span> <span class="token string">\'moment/locale/zh-cn\'</span><span class="token punctuation">;</span>\nmoment<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">\'zh-cn\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Calendar</span>\n  <span class="token attr-name">dateCellRender</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>dateCellRender<span class="token punctuation">}</span></span>\n  <span class="token attr-name">monthCellRender</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>monthCellRender<span class="token punctuation">}</span></span>\n  <span class="token attr-name">onPanelChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onPanelChange<span class="token punctuation">}</span></span>\n  <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>'},["code","import moment from 'moment';\n\n// It's recommended to set locale in entry file globaly.\nimport 'moment/locale/zh-cn';\nmoment.locale('zh-cn');\n\n<Calendar\n  dateCellRender={dateCellRender}\n  monthCellRender={monthCellRender}\n  onPanelChange={onPanelChange}\n  onSelect={onSelect}\n/>"]],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","value"],["td","The current selected date"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","current date"]],["tr",["td","defaultValue"],["td","The date selected by default"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","default date"]],["tr",["td","mode"],["td","The display mode of the calendar"],["td",["code","month"]," ","|"," ",["code","year"]],["td",["code","month"]]],["tr",["td","fullscreen"],["td","Whether to display in full-screen"],["td","boolean"],["td",["code","true"]]],["tr",["td","dateCellRender"],["td","Customize the display of the date cell, the returned content will be appended to the cell"],["td","function(date: moment): ReactNode"],["td","-"]],["tr",["td","monthCellRender"],["td","Customize the display of the month cell, the returned content will be appended to the cell"],["td","function(date: moment): ReactNode"],["td","-"]],["tr",["td","dateFullCellRender"],["td","Customize the display of the date cell, the returned content will override the cell"],["td","function(date: moment): ReactNode"],["td","-"]],["tr",["td","monthFullCellRender"],["td","Customize the display of the month cell, the returned content will override the cell"],["td","function(date: moment): ReactNode"],["td","-"]],["tr",["td","locale"],["td","The calendar's locale"],["td","object"],["td",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json"},"default"]]],["tr",["td","onPanelChange"],["td","Callback for when panel changes"],["td","function(date: moment, mode: string)"],["td","-"]],["tr",["td","onSelect"],["td","Callback for when a date is selected"],["td","function(date: moment\uff09"],["td","-"]],["tr",["td","disabledDate"],["td","Function that specifies the dates that cannot be selected"],["td","(currentDate: moment) => boolean"],["td","-"]]]]]}}});