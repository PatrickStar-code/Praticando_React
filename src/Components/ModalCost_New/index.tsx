import { Button, Input, Modal, Icon, Label } from 'keep-react'
import { Coins, CurrencyDollarSimple, TextAa } from 'phosphor-react'
import React from 'react'

export default function ModalCostNew({
  openModalEntry,
  closeModal,
}: {
  openModalEntry: boolean
  closeModal: () => void
}) {
  return (
    <Modal isOpen={openModalEntry} onClose={closeModal}>
      <Modal.Body className="flex w-[30rem] flex-col items-center p-6 lg:p-8 bg-black  ">
        <Modal.Icon className="h-20 w-20 border border-blue-100 bg-blue-300 text-blue-500">
          <Coins size={60} />
        </Modal.Icon>
        <Modal.Content className="my-4  text-white">
          <h3 className="mb-2 text-body-1 font-bold  text-center">
            Adicionar novo custo!
          </h3>
          <form className="flex flex-col mt-4 gap-6">
            <fieldset className="space-y-1">
              <Label htmlFor="name" className="text-white text-left">
                Titulo:
              </Label>
              <div className="relative">
                <Input placeholder="Enter email" className="ps-11" />
                <Icon>
                  <TextAa size={19} color="#AFBACA" />
                </Icon>
              </div>
            </fieldset>
            <fieldset className="space-y-1">
              <Label htmlFor="name" className="text-white text-left">
                Valor:
              </Label>
              <div className="relative">
                <Input placeholder="Enter email" className="ps-11" />
                <Icon>
                  <CurrencyDollarSimple size={19} color="#AFBACA" />
                </Icon>
              </div>
            </fieldset>
            <fieldset className="space-y-1">
              <Label htmlFor="name" className="text-white text-left">
                Tipo:
              </Label>
            </fieldset>
          </form>
        </Modal.Content>
      </Modal.Body>
    </Modal>
  )
}
