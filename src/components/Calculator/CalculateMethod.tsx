import { useState } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router'
import { Select } from './Select'
import { SelectInput } from './SelectInput'
import { methods } from '../../data/methods'
import {
  clientsData,
  defaultFormValues,
  investmentOptions,
  nicheOptions,
  revenueRangeOptions,
  ticketOptions,
} from '../../data/selectOptions'

interface FormData {
  niche: string
  revenueRange: string
  averageTicket: string
  monthlyInvestment: string
}

export function CalculateMethod() {
  const navigate = useNavigate()
  const { method } = useParams()
  const methodId = methods.find((m) => m.id === method)
  const methodName = methodId?.name ?? 'Método'
  const location = useLocation()

  const [formData, setFormData] = useState<FormData>(defaultFormValues)
  const { selectedMethodName } = location.state || {}
  const [selectedMethod, setSelectedMethod] = useState<string>(
    selectedMethodName || '',
  )
  const [selectedClient, setSelectedClient] = useState<string>('')
  const [errors, setErrors] = useState({
    niche: false,
    revenueRange: false,
    averageTicket: false,
    monthlyInvestment: false,
  })

  const updateFormField = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleMethodChange = (selectedName: string) => {
    const selected = methods.find((m) => m.name === selectedName)
    if (selected) {
      setSelectedMethod(selected.name)
      navigate(`/calculator/${selected.id}`, {
        state: {
          selectedMethodName: selected.name,
        },
      })
    }
  }

  const handleClientChange = (client: string) => {
    setSelectedClient(client)
    if (client !== 'None' && clientsData[client]) {
      const data = clientsData[client]
      setFormData(data)

      setErrors({
        niche: false,
        revenueRange: false,
        averageTicket: false,
        monthlyInvestment: false,
      })
    } else {
      setFormData(defaultFormValues)
    }
  }

  return (
    <div className="overflow-auto scrollbar-none max-viewport-height">
      <div className="ml-2 my-4 h-10 flex gap-4">
        <button
          className="max-w-[4.4375rem] w-full bg-[#1c1c1c] py-2 border border-[#4e4e4e] rounded-lg font-[Inter] font-semibold text-sm leading-5 text-white cursor-pointer hover:bg-[#4e4e4e] dark:bg-white dark:text-[#282828] dark:hover:bg-zinc-300"
          onClick={() => navigate(-1)}
        >
          Voltar
        </button>
        <Select
          value={selectedMethod || methodName}
          description="Você está calculando:"
          onChange={handleMethodChange}
          options={methods.map((method) => method.name)}
          placeholder={methodName}
          containerClass="w-[25.625rem] h-full"
        />
      </div>

      <div className="bg-[#f9f9f9] rounded-xl mb-2 p-3 border border-[#dfdfdf] flex flex-col dark:bg-zinc-700 dark:border-zinc-600">
        <div className="rounded-xl bg-white border border-[#e4e9e9] pb-3 dark:bg-zinc-600 dark:border-zinc-500">
          <div className="flex">
            <div className="w-1/2 pt-6 px-3 flex items-center gap-3 pb-6 border-b-2 border-[#4fd4d0]">
              <div className="w-7 h-7 flex items-center justify-center bg-[#4fd4cf27] border border-[#4fd4d0] rounded-full text-[#009c98] text-sm dark:text-[#4fd4d4]">
                <h1>1</h1>
              </div>
              <span className="font-medium text-sm text-[#6c7275] dark:text-zinc-300">
                Dados do seu faturamento
              </span>
            </div>
            <div className="h-[4.875rem] w-px bg-[#e4e9e9] dark:bg-zinc-500" />
            <div className="w-1/2 pt-6 px-3 flex items-center gap-3 pb-6 border-b-2 border-transparent">
              <div className="w-7 h-7 flex items-center justify-center bg-transparent border border-[#78787827] rounded-full text-[#6c727541] text-sm dark:text-zinc-400 dark:border-zinc-400">
                <h1>2</h1>
              </div>
              <span className="font-medium text-sm text-[#6c7275] dark:text-zinc-400">
                Resultado do cálculo
              </span>
            </div>
          </div>

          <div className="px-3 pt-3 border-t border-t-[#e4e9e9] dark:border-t-zinc-500">
            <div className="flex justify-between items-center gap-2.5 h-[3.625rem]">
              <p className="h-full w-full p-3 flex items-center text-sm text-[#676767] bg-[#f1f1f1] rounded-lg border border-[#e4e9e9] leading-4 dark:bg-zinc-500 dark:border-zinc-400 dark:text-zinc-300">
                Ok, vamos calcular o ROAS ideal para o seu negócio. Preencha os
                dados ou selecione um preset{' '}
              </p>
              <Select
                value={selectedClient}
                description="Selecione um cliente"
                onChange={handleClientChange}
                options={Object.keys(clientsData)}
                placeholder="Nenhum"
                containerClass="max-w-[22.25rem] w-full h-[3.625rem]"
              />
            </div>
            <div className="flex flex-col gap-5 mt-4">
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <div className="ml-1 flex items-center gap-2.5">
                    <label
                      htmlFor="niche"
                      className="font-medium text-xs dark:text-white"
                    >
                      Nicho
                    </label>
                    <img
                      src="/assets/info-icon.svg"
                      title="Selecione o segmento principal de atuação do seu negócio."
                    />
                  </div>
                  {errors.niche && (
                    <div className="flex items-center gap-1 text-sm text-[#ff4d4d]">
                      <img src="/assets/alert-circle.svg" alt="alerta" />
                      <span className="text-xs font-medium">
                        Campo obrigatório
                      </span>
                    </div>
                  )}
                </div>

                <SelectInput
                  value={formData.niche}
                  onChange={(value) => {
                    updateFormField('niche', value)
                    setErrors((prev) => ({ ...prev, niche: false }))
                  }}
                  options={nicheOptions}
                  placeholder="Selecione seu nicho"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <div className="ml-1 flex items-center gap-2.5">
                    <label
                      htmlFor="revenueRange"
                      className="font-medium text-xs dark:text-white"
                    >
                      Faixa de Faturamento
                    </label>
                    <img
                      src="/assets/info-icon.svg"
                      title="Informe o valor médio de faturamento mensal da sua empresa."
                    />
                  </div>
                  {errors.revenueRange && (
                    <div className="flex items-center gap-1 text-sm text-[#ff4d4d]">
                      <img src="/assets/alert-circle.svg" alt="alerta" />
                      <span className="text-xs font-medium">
                        Campo obrigatório
                      </span>
                    </div>
                  )}
                </div>

                <SelectInput
                  value={formData.revenueRange}
                  onChange={(value) => {
                    updateFormField('revenueRange', value)
                    setErrors((prev) => ({ ...prev, revenueRange: false }))
                  }}
                  options={revenueRangeOptions}
                  placeholder="Selecione sua faixa de faturamento"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <div className="ml-1 flex items-center gap-2.5">
                    <label
                      htmlFor="averageTicket"
                      className="font-medium text-xs dark:text-white"
                    >
                      Ticket Médio
                    </label>
                    <img
                      src="/assets/info-icon.svg"
                      title="Valor médio gasto por cada cliente em uma única compra."
                    />
                  </div>
                  {errors.averageTicket && (
                    <div className="flex items-center gap-1 text-sm text-[#ff4d4d]">
                      <img src="/assets/alert-circle.svg" alt="alerta" />
                      <span className="text-xs font-medium">
                        Campo obrigatório
                      </span>
                    </div>
                  )}
                </div>

                <SelectInput
                  value={formData.averageTicket}
                  onChange={(value) => {
                    updateFormField('averageTicket', value)
                    setErrors((prev) => ({ ...prev, averageTicket: false }))
                  }}
                  options={ticketOptions}
                  placeholder="Insira seu ticket médio"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <div className="ml-1 flex items-center gap-2.5">
                    <label
                      htmlFor="monthlyInvestment"
                      className="font-medium text-xs dark:text-white"
                    >
                      Investimento Mensal
                    </label>
                    <img
                      src="/assets/info-icon.svg"
                      title="Valor total investido mensalmente em marketing e mídia paga."
                    />
                  </div>
                  {errors.monthlyInvestment && (
                    <div className="flex items-center gap-1 text-sm text-[#ff4d4d]">
                      <img src="/assets/alert-circle.svg" alt="alerta" />
                      <span className="text-xs font-medium">
                        Campo obrigatório
                      </span>
                    </div>
                  )}
                </div>

                <SelectInput
                  value={formData.monthlyInvestment}
                  onChange={(value) => {
                    updateFormField('monthlyInvestment', value)
                    setErrors((prev) => ({ ...prev, monthlyInvestment: false }))
                  }}
                  options={investmentOptions}
                  placeholder="Selecione seu investimento mensal"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-white flex border-t border-t-[#e4e9e9] dark:bg-zinc-800 dark:border-t-zinc-600">
        <button
          className={`max-w-[16.75rem] w-full ml-auto bg-white py-5 border border-[#d7d7d7] rounded-lg font-[Inter] font-semibold text-sm text-[#282828] hover:bg-[#f6f6f6] dark:hover:bg-zinc-800 cursor-pointer dark:bg-[#1c1c1c] dark:border-zinc-600 dark:text-white `}
          onClick={() => {
            const newErrors = {
              niche: !formData.niche,
              revenueRange: !formData.revenueRange,
              averageTicket: !formData.averageTicket,
              monthlyInvestment: !formData.monthlyInvestment,
            }

            setErrors(newErrors)

            const isValid = Object.values(newErrors).every((v) => v === false)

            if (isValid) {
              navigate(`/calculator/${method}/result`, {
                state: {
                  selectedMethodName: selectedMethod,
                },
              })
            }
          }}
        >
          Calcular
        </button>
      </div>
    </div>
  )
}
