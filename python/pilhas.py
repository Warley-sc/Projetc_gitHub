def sauda(nome):
    print(f'olá, {nome} ')
    sauda2(nome)
    print(f'Preparado para dizer tchau...')
    tchau()


def sauda2(nome):
    print(f'como vai {nome} ?')

def tchau():
    print('tchau, ate')


sauda('warley')