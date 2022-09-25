import * as C from '@chakra-ui/react'

const FormAddress = () => {
    return (
        <C.Stack spacing={5}>
            <C.Input placeholder="Cidade, UF" borderColor="blue.700" />
            <C.Input placeholder="Rua" borderColor="blue.700" />
            <C.Input placeholder="CEP" borderColor="blue.700" />
        </C.Stack>
    )
}

export default FormAddress