import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Clipboard, User, Phone, Activity, Hand, Crosshair } from 'lucide-react';

type FormInputs = {
  // 第一页
  name: string;
  gender: '男' | '女';
  age: number;
  dominantHand: '左手' | '右手' | '双手';
  injurySide: '左侧' | '右侧' | '无';
  phoneNumber: string;
  sportLifestyle: '是' | '否';
  sportLevel: '竞技性运动' | '休闲运动' | '不参加运动';
  sportType: '接触性运动' | '强力过顶运动' | '无';
  // 第二页
  painLevel: number;
  painFrequency: string;
  strongerPainKiller: '有' | '无';
  painKillerFrequency: number;
  painKillerDosage: number;
  shoulderPain: '无' | '轻微' | '中等' | '严重' | '极度';
  shoulderPainLifting: '无疼痛' | '轻度痛' | '中度痛' | '重度痛';
};

function App() {
  const [page, setPage] = useState(1);
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    console.log(data);
    // 这里你通常会将数据发送到后端
  };

  const sportLifestyle = watch('sportLifestyle');
  const painFrequency = watch('painFrequency');

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="h-14 w-14 bg-cyan-200 rounded-full flex items-center justify-center">
                <Clipboard className="h-8 w-8 text-cyan-600" />
              </div>
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">患者问卷调查</h2>
                <p className="text-sm text-gray-500 font-normal leading-relaxed">
                  {page === 1 ? '基本信息' : '疼痛和止痛药使用问卷'}
                </p>
              </div>
            </div>
            <form className="divide-y divide-gray-200" onSubmit={handleSubmit(onSubmit)}>
              {page === 1 && (
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="flex flex-col">
                    <label className="leading-loose">姓名</label>
                    <div className="relative focus-within:text-gray-600 text-gray-400">
                      <input
                        type="text"
                        {...register("name", { required: "姓名是必填项" })}
                        className="pl-10 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="您的姓名"
                      />
                      <User className="absolute left-3 top-2 h-6 w-6" />
                    </div>
                    {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                  </div>

                  <div className="flex flex-col">
                    <label className="leading-loose">性别</label>
                    <div className="flex space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          {...register("gender", { required: "性别是必选项" })}
                          value="男"
                          className="form-radio"
                        />
                        <span className="ml-2">男</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          {...register("gender", { required: "性别是必选项" })}
                          value="女"
                          className="form-radio"
                        />
                        <span className="ml-2">女</span>
                      </label>
                    </div>
                    {errors.gender && <span className="text-red-500 text-sm">{errors.gender.message}</span>}
                  </div>

                  <div className="flex flex-col">
                    <label className="leading-loose">年龄</label>
                    <input
                      type="number"
                      {...register("age", { required: "年龄是必填项", min: 0, max: 120 })}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="您的年龄"
                    />
                    {errors.age && <span className="text-red-500 text-sm">{errors.age.message}</span>}
                  </div>

                  <div className="flex flex-col">
                    <label className="leading-loose">主力手</label>
                    <div className="relative focus-within:text-gray-600 text-gray-400">
                      <select
                        {...register("dominantHand", { required: "主力手是必选项" })}
                        className="pl-10 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      >
                        <option value="">选择主力手</option>
                        <option value="左手">左手</option>
                        <option value="右手">右手</option>
                        <option value="双手">双手</option>
                      </select>
                      <Hand className="absolute left-3 top-2 h-6 w-6" />
                    </div>
                    {errors.dominantHand && <span className="text-red-500 text-sm">{errors.dominantHand.message}</span>}
                  </div>

                  <div className="flex flex-col">
                    <label className="leading-loose">受伤侧</label>
                    <div className="relative focus-within:text-gray-600 text-gray-400">
                      <select
                        {...register("injurySide", { required: "受伤侧是必选项" })}
                        className="pl-10 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      >
                        <option value="">选择受伤侧</option>
                        <option value="左侧">左侧</option>
                        <option value="右侧">右侧</option>
                        <option value="无">无</option>
                      </select>
                      <Crosshair className="absolute left-3 top-2 h-6 w-6" />
                    </div>
                    {errors.injurySide && <span className="text-red-500 text-sm">{errors.injurySide.message}</span>}
                  </div>

                  <div className="flex flex-col">
                    <label className="leading-loose">电话号码</label>
                    <div className="relative focus-within:text-gray-600 text-gray-400">
                      <input
                        type="tel"
                        {...register("phoneNumber", { required: "电话号码是必填项" })}
                        className="pl-10 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="您的电话号码"
                      />
                      <Phone className="absolute left-3 top-2 h-6 w-6" />
                    </div>
                    {errors.phoneNumber && <span className="text-red-500 text-sm">{errors.phoneNumber.message}</span>}
                  </div>

                  <div className="flex flex-col">
                    <label className="leading-loose">是否从事运动类生活？</label>
                    <div className="relative focus-within:text-gray-600 text-gray-400">
                      <select
                        {...register("sportLifestyle", { required: "此项是必选项" })}
                        className="pl-10 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      >
                        <option value="">请选择</option>
                        <option value="是">是</option>
                        <option value="否">否</option>
                      </select>
                      <Activity className="absolute left-3 top-2 h-6 w-6" />
                    </div>
                    {errors.sportLifestyle && <span className="text-red-500 text-sm">{errors.sportLifestyle.message}</span>}
                  </div>

                  {sportLifestyle === '是' && (
                    <>
                      <div className="flex flex-col">
                        <label className="leading-loose">参与运动的程度</label>
                        <select
                          {...register("sportLevel", { required: "运动程度是必选项" })}
                          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        >
                          <option value="">选择运动程度</option>
                          <option value="竞技性运动">竞技性运动</option>
                          <option value="休闲运动">休闲运动</option>
                          <option value="不参加运动">不参加运动</option>
                        </select>
                        {errors.sportLevel && <span className="text-red-500 text-sm">{errors.sportLevel.message}</span>}
                      </div>

                      <div className="flex flex-col">
                        <label className="leading-loose">运动类型</label>
                        <select
                          {...register("sportType", { required: "运动类型是必选项" })}
                          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        >
                          <option value="">选择运动类型</option>
                          <option value="接触性运动">接触性运动（如：篮球、足球）</option>
                          <option value="强力过顶运动">强力过顶运动（如：排球、网球）</option>
                          <option value="无">无</option>
                        </select>
                        {errors.sportType && <span className="text-red-500 text-sm">{errors.sportType.message}</span>}
                      </div>
                    </>
                  )}
                </div>
              )}

              {page === 2 && (
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="flex flex-col">
                    <label className="leading-loose">1. 疼痛评级</label>
                    <p className="text-sm text-gray-600">请选择您的疼痛程度，0代表无疼痛，10代表难以忍受的疼痛（如生小孩时的疼痛）。</p>
                    <div className="flex justify-between items-center mt-2">
                      <span>0 无疼痛</span>
                      <input
                        type="range"
                        min="0"
                        max="10"
                        {...register("painLevel", { required: "疼痛评级是必选项" })}
                        className="w-1/2"
                      />
                      <span>10 难以忍受的疼痛</span>
                    </div>
                    {errors.painLevel && <span className="text-red-500 text-sm">{errors.painLevel.message}</span>}
                  </div>

                  <div className="flex flex-col">
                    <label className="leading-loose">2. 疼痛频率和止痛药使用</label>
                    <select
                      {...register("painFrequency", { required: "疼痛频率是必选项" })}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    >
                      <option value="">请选择适合您的描述</option>
                      <option value="a">a. 无法忍受的持续痛楚＋需使用强力镇痛药</option>
                      <option value="b">b. 持续痛楚，但可忍受+偶尔使用强力镇痛药</option>
                      <option value="c">c. 休息时无/偶尔疼痛 或 轻体力劳动致疼痛 或 经常使用非甾体镇痛药</option>
                      <option value="d">d. 重体力后出现疼痛 或 偶尔服用非甾体镇痛药</option>
                      <option value="e">e. 偶尔出现轻微疼痛</option>
                      <option value="f">f. 无疼痛</option>
                    </select>
                    {errors.painFrequency && <span className="text-red-500 text-sm">{errors.painFrequency.message}</span>}
                  </div>

                  {['a', 'b', 'c', 'd'].includes(painFrequency) && (
                    <div className="flex flex-col space-y-2">
                      <label className="leading-loose">3. 疼痛药使用频率</label>
                      <div>
                        <label className="inline-flex items-center">
                          <span className="mr-2">a. 有无使用更强的止痛药？</span>
                          <input
                            type="radio"
                            {...register("strongerPainKiller", { required: "此项是必选项" })}
                            value="有"
                            className="form-radio"
                          />
                          <span className="ml-2">有</span>
                        </label>
                        <label className="inline-flex items-center ml-4">
                          <input
                            type="radio"
                            {...register("strongerPainKiller", { required: "此项是必选项" })}
                            value="无"
                            className="form-radio"
                          />
                          <span className="ml-2">无</span>
                        </label>
                      </div>
                      {errors.strongerPainKiller && <span className="text-red-500 text-sm">{errors.strongerPainKiller.message}</span>}
                      <div className="flex items-center">
                        <span className="mr-2">b. 如何服用？每天</span>
                        <input
                          type="number"
                          {...register("painKillerFrequency", { required: "此项是必填项", min: 0 })}
                          className="w-16 px-2 py-1 border rounded"
                        />
                        <span className="mx-2">次，每次</span>
                        <input
                          type="number"
                          {...register("painKillerDosage", { required: "此项是必填项", min: 0 })}
                          className="w-16 px-2 py-1 border rounded"
                        />
                        <span className="ml-2">片</span>
                      </div>
                      {(errors.painKillerFrequency || errors.painKillerDosage) && (
                        <span className="text-red-500 text-sm">请填写完整的用药信息</span>
                      )}
                    </div>
                  )}

                  <div className="flex flex-col">
                    <label className="leading-loose">4. 手臂或肩部有无刺痛感？</label>
                    <select
                      {...register("shoulderPain", { required: "此项是必选项" })}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    >
                      <option value="">请选择</option>
                      <option value="无">a. 无</option>
                      <option value="轻微">b. 轻微</option>
                      <option value="中等">c. 中等</option>
                      <option value="严重">d. 严重</option>
                      <option value="极度">e. 极度</option>
                    </select>
                    {errors.shoulderPain && <span className="text-red-500 text-sm">{errors.shoulderPain.message}</span>}
                  </div>

                  <div className="flex flex-col">
                    <label className="leading-loose">5. 举头活动时的肩部疼痛：</label>
                    <select
                      {...register("shoulderPainLifting", { required: "此项是必选项" })}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    >
                      <option value="">请选择</option>
                      <option value="无疼痛">a. 无疼痛</option>
                      <option value="轻度痛">b. 轻度痛</option>
                      <option value="中度痛">c. 中度痛</option>
                      <option value="重度痛">d. 重度痛</option>
                    </select>
                    {errors.shoulderPainLifting && <span className="text-red-500 text-sm">{errors.shoulderPainLifting.message}</span>}
                  </div>
                </div>
              )}

              <div className="pt-4 flex items-center space-x-4">
                {page > 1 && (
                  <button
                    type="button"
                    onClick={prevPage}
                    className="bg-gray-300 flex justify-center items-center w-full text-gray-700 px-4 py-3 rounded-md focus:outline-none hover:bg-gray-400 transition-colors"
                  >
                    上一页
                  </button>
                )}
                {page < 2 ? (
                  <button
                    type="button"
                    onClick={nextPage}
                    className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none hover:bg-blue-600 transition-colors"
                  >
                    下一页
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-green-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none hover:bg-green-600 transition-colors"
                  >
                    提交
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;