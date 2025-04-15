import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { ScoreItem } from './ScoreItem'
import { InfoTable } from './InfoTable'
import { Select } from './Select'
import { RadialChart } from '../RadialChart'
import { methods } from '../../data/methods'
import { headerTableColumns, tableDatas } from '../../data/resultTableData'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export function Result() {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const { method } = useParams()
  const methodId = methods.find((m) => m.id === method)
  const methodName = methodId?.name ?? 'Método'

  const toggleModal = () => setShowModal(!showModal)

  return (
    <>
      <div className="flex flex-col overflow-auto scrollbar-none max-viewport-height">
        <div className="ml-2 my-4 h-10 flex gap-4">
          <button
            className="max-w-[4.4375rem] w-full bg-[#1c1c1c] py-2 border border-[#4e4e4e] rounded-lg font-[Inter] font-semibold text-sm leading-5 text-white cursor-pointer hover:bg-[#4e4e4e] dark:bg-white dark:text-[#282828] dark:hover:bg-[#f6f6f6]"
            onClick={() => navigate(-1)}
          >
            Voltar
          </button>

          <Select
            value={methodName}
            description="Você está calculando:"
            onChange={() => {}}
            options={methods.map((m) => m.name)}
            placeholder={methodName}
            containerClass="w-[25.625rem] h-full min-h-10"
            disabled
          />
        </div>

        <div className="mb-2 rounded-xl bg-white border border-[#e4e9e9] dark:bg-zinc-600 dark:border-zinc-500">
          <div className="flex">
            <div className="w-1/2 pt-6 px-3 flex items-center gap-3 pb-6 border-b-2 border-transparent">
              <div className="w-7 h-7 flex items-center justify-center bg-transparent border border-[#78787827] rounded-full text-[#6c727541] text-sm dark:text-zinc-400 dark:border-zinc-400">
                <img src="/assets/check.svg" />
              </div>
              <span className="font-medium text-sm text-[#6c7275] dark:text-zinc-400">
                Dados do seu faturamento
              </span>
            </div>

            <div className="h-[4.875rem] w-px bg-[#e4e9e9] dark:bg-zinc-500" />

            <div className="w-1/2 pt-6 px-3 flex items-center gap-3 pb-6 border-b-2 border-[#4fd4d0]">
              <div className="w-7 h-7 flex items-center justify-center bg-[#4fd4cf27] border border-[#4fd4d0] rounded-full text-[#009c98] text-sm dark:text-[#4fd4d4]">
                <h1>2</h1>
              </div>
              <span className="font-medium text-sm text-[#6c7275] dark:text-zinc-300">
                Resultado do cálculo
              </span>
            </div>
          </div>

          <div className="px-3 pt-3 border-t border-t-[#e4e9e9] dark:border-t-zinc-500">
            <div className="p-3 flex gap-2 bg-[#f2f2f2] border border-[#e4e9e9] rounded-md dark:bg-zinc-500">
              <div className="h-52 w-full flex items-center justify-center bg-white p-6 rounded-xl border border-[#e4e4e4] dark:bg-zinc-700">
                <RadialChart
                  id="roas-atual"
                  value={6.5}
                  label="Roas Atual"
                  highlightColor="#00cfd3"
                />
              </div>
              <div className="h-52 w-full flex items-center justify-center bg-white p-6 rounded-xl border border-[#e4e4e4] dark:bg-zinc-700">
                <RadialChart
                  id="roas-ideal"
                  value={8.5}
                  label="Roas Ideal"
                  highlightColor="#2ed300"
                />
              </div>
            </div>
          </div>

          <div className="px-3 mt-6">
            <h2 className="ml-2 h-10 flex items-center text-base font-medium text-[#9a9a9a]">
              Dados Inseridos no Cálculo
            </h2>

            <p className="p-3 text-sm text-[#676767] bg-[#f9f9f9] rounded-md border border-[#e4e9e9] leading-[1.125rem] dark:bg-zinc-500 dark:border-zinc-400 dark:text-zinc-300">
              Levando em conta o momento do seu negócio e as informações
              fornecidas, indicamos um ROAS médio de 6,5. Esse valor pode
              variar, a depender das estratégias utilizadas.
            </p>

            <InfoTable
              columns={headerTableColumns}
              data={tableDatas}
              columnSize="smaller"
              containerClass="mt-3"
            />

            <div className="mt-3 mb-3 border border-[#e4e9e9] rounded-sm  dark:border-zinc-400">
              <p className="p-3 text-xs text-[#676767] bg-[#f9f9f9] dark:text-zinc-300 dark:bg-zinc-500">
                Alguns dados são levados em consideração nesse calculo, tais
                como:
              </p>

              <ScoreItem label="Estágios do e-commerce" score="1.0" />
              <ScoreItem label="Média do seu nicho" score="1.0" />
              <ScoreItem label="Posicionamento da marca" score="1.0" />
              <ScoreItem label="Canais de tráfego" score="1.0" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-white flex border-t border-t-[#e4e9e9] dark:bg-zinc-800 dark:border-t-zinc-600">
        <button
          onClick={toggleModal}
          className={`max-w-[16.75rem] w-full ml-auto bg-[#0c68e9] py-5 border border-[#1153bc] rounded-lg font-[Inter] font-semibold text-sm text-white hover:bg-[#095acc] cursor-pointer dark:border-zinc-600`}
        >
          Acessar Método Vello
        </button>
      </div>

      <VideoModal isOpen={showModal} onClose={toggleModal} />
    </>
  )
}

const VideoModal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex justify-center items-center z-20">
      <div className="bg-zinc-600 opacity-50 inset-0 fixed" />
      <div className="bg-white rounded-lg relative overflow-hidden border border-[#dedede] dark:bg-zinc-700 dark:border-zinc-600">
        <div className="p-4 px-8 flex items-center justify-between bg-[#f7f7f7] dark:bg-zinc-500 dark:border-zinc-400 ">
          <p className="text-sm font-medium dark:text-zinc-300">
            Veja as dicas de como atingir o ROAS ideal
          </p>
          <div>
            <button
              onClick={onClose}
              className="p-2 flex items-center gap-2 bg-white border border-[#f0f0f0] shadow rounded-md uppercase text-sm font-medium cursor-pointer hover:bg-[#f6f6f6]"
            >
              <span>Fechar</span>
              <img src="/assets/x.svg" />
            </button>
          </div>
        </div>

        <div className="p-4 border-t border-t-[#e9ecef] dark:border-t-zinc-400">
          <p className="p-3 mb-4 text-sm text-[#676767] bg-[#f9f9f9] rounded-md border border-[#e4e9e9] leading-[1.125rem] dark:bg-zinc-500 dark:border-zinc-400 dark:text-zinc-300">
            Como atingir o ROAS ideal para seu negócio
          </p>

          <img src="/assets/thumb.png" />

          <div className="mt-3 mb-3 border border-[#e4e9e9] rounded-sm  dark:border-zinc-400">
            <p className="h-12 flex items-center p-3 text-xs uppercase font-medium bg-[#f9f9f9] dark:text-zinc-300 dark:bg-zinc-500">
              Soluções Rápidas
            </p>

            <ScoreItem
              label="Solução 01"
              labelClass="text-sm uppercase text-[#676767] dark:text-zinc-200"
              hideScore={true}
              containerClass="h-10 my-auto px-3"
            />
            <ScoreItem
              label="Solução 02"
              labelClass="text-sm uppercase text-[#676767] dark:text-zinc-200"
              hideScore={true}
              containerClass="h-10 my-auto px-3"
            />
            <ScoreItem
              label="Solução 03"
              labelClass="text-sm uppercase text-[#676767] dark:text-zinc-200"
              hideScore={true}
              containerClass="h-10 my-auto px-3"
            />
            <ScoreItem
              label="Solução 04"
              labelClass="text-sm uppercase text-[#676767] dark:text-zinc-200"
              hideScore={true}
              containerClass="h-10 my-auto px-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
