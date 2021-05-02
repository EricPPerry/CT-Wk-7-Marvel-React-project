import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseCharacter } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

import { useGetData } from '../../custom-hooks';

interface HeroFormProps {
    id?:string;
    data?:{}
}

interface HeroState {
    character_name: string;
    price: string;
}

export const HeroForm = (props:HeroFormProps) => {

    const dispatch = useDispatch();
    let { heroData, getData } = useGetData();
    const store = useStore()
    const character_name = useSelector<HeroState>(state => state.character_name)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            server_calls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            setTimeout(function(){window.location.reload()}, 1000);
            setTimeout(function(){event.target.reset()}, 1000);
        } else {
            dispatch(chooseCharacter(data.character_name))
            server_calls.create(store.getState())
            setTimeout(function(){window.location.reload()}, 1000);
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="character_name">Hero Name</label>
                    <Input {...register('character_name')} name="character_name" placeholder='Hero Name' />
                </div>
                <div>
                    <label htmlFor="comics_appeared_in">Comics Appeared In (number):</label>
                    <Input {...register('comics_appeared_in')} name="comics_appeared_in" placeholder="Comics Appeared in"/>
                </div>
                <div>
                    <label htmlFor="description">description</label>
                    <Input {...register('description')} name="description" placeholder="description"/>
                </div>
                <div>
                    <label htmlFor="super_power">Super Power</label>
                    <Input {...register('super_power')} name="super_power" placeholder="Super Power"/>
                </div>
                <Button type='submit' color='secondary' variant='contained'>Submit</Button>
            </form>
        </div>
    )
}