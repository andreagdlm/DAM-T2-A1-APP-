import React, { useEffect } from 'react';
import { Usuario } from "../interfaces/reqResp";
import { useUsuarios } from './hooks/useUsuarios';

export const Usuarios = () => {
    const { usuarios, FnPaginaSiguiente, FnPaginaAnterior } = useUsuarios();

    const renderItem = (usuario: Usuario) => {
        return (
            <tr key={usuario.id.toString()}>
                <td>
                    <img
                        src={usuario.avatar}
                        alt={usuario.first_name}
                        style={{
                            width: 50,
                            borderRadius: 100
                        }}
                    />
                </td>
                <td>
                    {usuario.first_name} {usuario.last_name}
                </td>
                <td>
                    {usuario.email}
                </td>
            </tr>
        );
    };

    return (
        <>
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(ArgUsuario => renderItem(ArgUsuario))}
                </tbody>
            </table>
            <button 
            className="btn btn-primary"
            ///onClick= { FnCargaUsuarios }
            onClick= { FnPaginaAnterior }
            >
                Anterior       
            </button>
           
            <button
                className="btn btn-primary"
                //onClick= { FnCargaUsuarios }
                onClick= { FnPaginaSiguiente }
                >
                Siguiente       
            </button>
        </>
    );
};